/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // This setting prevents ESLint errors from failing your build
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
