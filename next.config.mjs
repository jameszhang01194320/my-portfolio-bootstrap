// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'docs',
  images: {
    unoptimized: true,
  },
  basePath: "/my-portfolio-bootstrap",
  assetPrefix: "/my-portfolio-bootstrap/",
};

export default nextConfig;
