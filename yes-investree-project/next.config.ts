import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
  reactStrictMode: true,
  trailingSlash: true,
  experimental: {
    optimizePackageImports: [
      "@apollo/client",
      "@react-google-maps/api",
      "@mui/base",
      "react-multi-carousel",
    ],
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
      },
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
      },
    ],
  },
  i18n: {
    defaultLocale: "th",
    locales: ["th", "en"],
    localeDetection: false,
  },
  // ปิด static generation ตอน build
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
    }
  },
};

export default nextConfig;
