import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Optional: Set basePath and assetPrefix if deploying to a subfolder
};

export default nextConfig;
