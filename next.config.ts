import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@lingui/react', '@lingui/core'],
  experimental: {
    optimizePackageImports: ['@radix-ui/react-icons', 'lucide-react'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pub-01266f44ca124c0090fae66e4a34eabb.r2.dev',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
