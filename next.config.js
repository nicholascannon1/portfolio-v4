/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    webpack: (config, { isServer }) => {
        // generate sitemap.xml when webpack is run serverside
        if (isServer) {
            import('./scripts/generate-sitemap.mjs');
        }

        return config;
    },
};
