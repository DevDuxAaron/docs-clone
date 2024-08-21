/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBiuldErrors: true,
    },
    images: {
        remotePatterns: [{ protocol: 'https', hostname: 'img.clerk.com'}]
    }
};

export default nextConfig;
