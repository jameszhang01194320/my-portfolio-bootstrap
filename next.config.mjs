const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'docs',
  basePath: isProd ? '/my-portfolio-bootstrap' : '',
  images: { unoptimized: true },
  allowedDevOrigins: ['http://localhost:3000', 'http://192.168.0.3:3000'],

  // ⬇️ 新增
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? '/my-portfolio-bootstrap' : '',
  },
};
export default nextConfig;
