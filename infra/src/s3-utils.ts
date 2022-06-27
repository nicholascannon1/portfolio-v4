import * as pulumi from '@pulumi/pulumi';
import * as aws from '@pulumi/aws';
import * as fs from 'fs';
import * as path from 'path';
import * as mime from 'mime';

const IGNORED_FILES = ['.DS_Store', '.env'];

const isDirectory = (filePath: string): boolean => fs.lstatSync(filePath).isDirectory();

export const syncWebsiteFiles = (
    directoryPath: string,
    bucket: aws.s3.Bucket,
    tags?: { [key: string]: string },
    folder?: string
) => {
    for (let file of fs.readdirSync(directoryPath)) {
        if (IGNORED_FILES.includes(file)) continue;

        const filePath = path.join(directoryPath, file);
        if (isDirectory(filePath)) {
            // recurse on the dir and sync files with prefix
            const folderPath = folder === undefined ? file : path.join(folder, file);
            syncWebsiteFiles(filePath, bucket, tags, folderPath);
        } else {
            const fileKey = folder ? `${folder}/${file}` : file;
            new aws.s3.BucketObject(fileKey, {
                bucket: bucket,
                key: fileKey,
                source: new pulumi.asset.FileAsset(filePath),
                contentType: mime.getType(filePath) || undefined,
                cacheControl: file === 'index.html' ? 'no-store' : 'public', // never cache index.html
                tags,
            });
        }
    }
};
