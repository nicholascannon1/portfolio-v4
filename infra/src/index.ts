import * as pulumi from '@pulumi/pulumi';
import * as aws from '@pulumi/aws';
import * as path from 'path';
import { syncWebsiteFiles } from './s3-utils';

const BUILD_DIR = '../../client/out';

const config = new pulumi.Config();
const stack = pulumi.getStack();
const prefix = `${pulumi.getProject()}-${stack}`;

const certStack = new pulumi.StackReference('nicholascannon1/portfolio-cert/prod');

const zoneId = config.require('hosted-zone-id');
const recordName = config.require('record-name');
const cnameRecordName = `www.${recordName}`;
const certArn = certStack.getOutput('certArn');
const tags = { project: prefix };

const bucket = new aws.s3.Bucket(`${prefix}-bucket`, {
    acl: 'private',
    website: {
        indexDocument: 'index.html',
        errorDocument: 'index.html',
    },
    tags,
});

syncWebsiteFiles(path.join(__dirname, BUILD_DIR), bucket, tags);

const originAccessIdentity = new aws.cloudfront.OriginAccessIdentity(`${prefix}-oai`);

const bucketPolicy = new aws.s3.BucketPolicy(`${prefix}-bucket-policy`, {
    bucket: bucket.id,
    policy: pulumi.all([bucket.bucket, originAccessIdentity.iamArn]).apply(([bucketName, oiaArn]) =>
        JSON.stringify({
            Version: '2012-10-17',
            Statement: [
                {
                    Effect: 'Allow',
                    Principal: {
                        AWS: oiaArn,
                    },
                    Action: ['s3:GetObject'],
                    Resource: [`arn:aws:s3:::${bucketName}/*`],
                },
            ],
        })
    ),
});

const CachingOptimizedPolicyId = '658327ea-f89d-4fab-a63d-7e88639e58f6';

const distribution = new aws.cloudfront.Distribution(`portolio-distribution-${stack}`, {
    origins: [
        {
            domainName: bucket.bucketRegionalDomainName,
            s3OriginConfig: {
                originAccessIdentity: originAccessIdentity.cloudfrontAccessIdentityPath,
            },
            originId: 'portfolio-website',
        },
    ],
    enabled: true,
    defaultRootObject: 'index.html',
    aliases: [recordName, cnameRecordName],
    defaultCacheBehavior: {
        allowedMethods: ['GET', 'HEAD', 'OPTIONS'],
        cachedMethods: ['GET', 'HEAD'],
        targetOriginId: 'portfolio-website',
        viewerProtocolPolicy: 'redirect-to-https',
        cachePolicyId: CachingOptimizedPolicyId,
    },
    customErrorResponses: [
        {
            errorCode: 404,
            responseCode: 404,
            responsePagePath: '/index.html',
        },
        {
            errorCode: 403,
            responseCode: 200,
            responsePagePath: '/index.html',
        },
    ],
    restrictions: {
        geoRestriction: {
            restrictionType: 'none',
        },
    },
    viewerCertificate: {
        acmCertificateArn: certArn,
        sslSupportMethod: 'sni-only',
    },
    tags,
});

const record = new aws.route53.Record(`portfolio-record-home-a-${stack}`, {
    zoneId,
    name: recordName,
    type: 'A',
    aliases: [
        {
            evaluateTargetHealth: false,
            name: distribution.domainName,
            zoneId: distribution.hostedZoneId,
        },
    ],
});

const cname = new aws.route53.Record(`portfolio-record-home-cname-${stack}`, {
    zoneId,
    name: cnameRecordName,
    type: 'CNAME',
    ttl: 300,
    records: [recordName],
});

export const bucketName = bucket.bucket;
export const oaiArn = originAccessIdentity.id;
export const distributionArn = distribution.arn;
