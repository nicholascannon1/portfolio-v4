/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    webpack: (config, { isServer }) => {
        if (isServer) {
            import('./scripts/generate-sitemap.mjs');
        }

        return config;
    },
};
