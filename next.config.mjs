// next.config.mjs
const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'docs',
  basePath: isProd ? '/my-portfolio-bootstrap' : '',
  assetPrefix: isProd ? '/my-portfolio-bootstrap/' : undefined,
  images: { unoptimized: true },

  // ✅ 放在顶层，而不是 experimental 里
  allowedDevOrigins: ['http://localhost:3000', 'http://192.168.0.3:3000'],
};

export default nextConfig;
