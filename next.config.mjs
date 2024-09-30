/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DATABASE_URL: process.env.DATABASE_URL ?? "",
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY ?? "",
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID ?? ""
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.builder.io",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
