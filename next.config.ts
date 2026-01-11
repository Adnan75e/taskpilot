import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * 🔑 Static export (required for Capacitor & Netlify)
   */
  output: "export",

  /**
   * 🔕 Ignore TS & ESLint errors
   * (Firebase Studio / rapid iteration friendly)
   */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  /**
   * 🖼 Images config for static hosting
   * REQUIRED for Next.js export mode
   */
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

  /**
   * 🧠 Important for Capacitor + static routing
   */
  trailingSlash: true,
};

export default nextConfig;
