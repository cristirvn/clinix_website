import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "i.ytimg.com" },
    ],
  },
  async redirects() {
    // Old ad/social links from the previous site keep working.
    return [
      { source: "/test/:slug", destination: "/chestionare/:slug", permanent: true },
      { source: "/test", destination: "/chestionare", permanent: true },
    ];
  },
};

export default nextConfig;
