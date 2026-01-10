import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 🔑 Netlify static export
  output: "export",

  // 🔕 Ignore TS & ESLint errors (Firebase Studio default)
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  // 🖼 Static hosting ke liye REQUIRED
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
