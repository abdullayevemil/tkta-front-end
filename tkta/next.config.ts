import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.tsx",
      },
    },
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.tkta.edu.az",
      },
      {
        protocol: "https",
        hostname: "tkta.edu.az",
      },
      {
        protocol: "https",
        hostname: "miras.blob.core.windows.net",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
    minimumCacheTTL: 60,
  },
};

export default nextConfig;