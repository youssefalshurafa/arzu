/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'lh3.googleusercontent.com',
      'res.cloudinary.com',
      'cdn-media.prettylittlething.com',
      'img.clerk.com',
    ],
  },
};

module.exports = nextConfig;
