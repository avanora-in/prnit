import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/solaros", destination: "/solar-os", permanent: true },
      { source: "/zoho-consulting", destination: "/zoho-consulting-partner", permanent: true },
    ];
  },
};

export default nextConfig;
