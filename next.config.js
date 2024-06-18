/** @type {import('next').NextConfig} */
const nextConfig = {
  //output: 'export',
  basePath: '/public',
  distDir: 'build',
  //basePath: process.env.BASE_PATH,
  experimental: {
    appDir: true,
    typedRoutes: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
