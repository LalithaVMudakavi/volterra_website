/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },

  allowedDevOrigins: [
    "192.168.0.31",
    "192.168.0.19",
    "localhost",
  ],
};

module.exports = nextConfig;