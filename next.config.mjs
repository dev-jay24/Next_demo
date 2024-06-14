/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d2fovfky1gbl7e.cloudfront.net",
        port: "",
      },
    ],
  },
};

export default nextConfig;
