/** @type {import('next').NextConfig} */
const nextConfig = {
  //output: 'export',
  //basePath: '/',
  distDir: 'build',
  //basePath: process.env.BASE_PATH,
  experimental: {
    appDir: true,
    typedRoutes: true,
    serverActions: {
      allowedOrigins: ['kondomino.com.br', 'localhost:3003'],
    },
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
