/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },

  allowedDevOrigins: [
    "192.168.88.4",
    "192.168.0.19",
    "localhost",
  ],
};

module.exports = nextConfig;