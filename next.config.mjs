import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/da8zkv5ql/**',
      },
      {
        protocol: "https",
        hostname: "personal-be-373o.onrender.com",
        port: "",
        pathname: "/public/images/**",
      },
    ],
  },
};

export default withMDX(nextConfig);
