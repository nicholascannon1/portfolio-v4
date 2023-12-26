import React from 'react';
import Head from 'next/head';

export const SEO = ({ title, description }: { title: string; description: string }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />

            <meta name="og:type" content="website" />
            <meta name="og:title" content={title} />
            <meta name="og:description" content={description} />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
        </Head>
    );
};
