/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "limitlessgraphicsapi.marubardoli.com",
        pathname: "/Files/**",
      },
    ],

    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
