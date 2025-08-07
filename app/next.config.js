/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/my-portfolio-bootstrap',  // GitHub Pages 的子路径
  images: {
    unoptimized: true, // 防止生成优化版 images
  },
};

module.exports = nextConfig;
