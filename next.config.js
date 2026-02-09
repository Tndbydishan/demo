/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow loading images from external sources if needed
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      }
    ],
  },
};

module.exports = nextConfig;