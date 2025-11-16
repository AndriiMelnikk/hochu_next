import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@lingui/react", "@lingui/core"],
  experimental: {
    optimizePackageImports: ["@radix-ui/react-icons", "lucide-react"],
  },
};

export default nextConfig;

