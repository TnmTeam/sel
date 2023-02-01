/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    emotion: {
      sourceMap: true,
      autoLabel: "dev-only",
      labelFormat: "[dirname]-[filename]-[local]",
    },
  },
};

module.exports = nextConfig;
