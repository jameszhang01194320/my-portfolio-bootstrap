// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'docs', // ✅ 直接导出到 docs 目录
  basePath: '/my-portfolio-bootstrap',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
