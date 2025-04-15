import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'c8.alamy.com',
        port: '',
        pathname: '/comp/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
