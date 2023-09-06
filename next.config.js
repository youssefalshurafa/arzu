/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: ['mongoose'],
  },
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'lh3.googleusercontent.com',
      'res.cloudinary.com',
      'cdn-media.prettylittlething.com',
      'img.clerk.com',
      'utfs.io',
    ],
  },
};

module.exports = nextConfig;
