import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [{ source: "/solaros", destination: "/solar-os", permanent: true }];
  },
};

export default nextConfig;
