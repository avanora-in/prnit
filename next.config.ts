import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/solaros", destination: "/solar-os", permanent: true },
      { source: "/zoho-consulting", destination: "/zoho-consulting-partner", permanent: true },
      { source: "/work/project-name", destination: "/work/saas-growth-platform-optimization", permanent: true },
    ];
  },
};

export default nextConfig;
