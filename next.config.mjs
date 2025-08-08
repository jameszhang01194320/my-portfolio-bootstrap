// next.config.mjs
const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'docs',
  basePath: isProd ? '/my-portfolio-bootstrap' : '',
  images: { unoptimized: true },

  // 可选：局域网跨域警告去除（dev 时）
  allowedDevOrigins: ['http://localhost:3000', 'http://192.168.0.3:3000'],

  // 给组件里拼图片前缀用（线上：/my-portfolio-bootstrap，本地：''）
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? '/my-portfolio-bootstrap' : '',
  },
};

export default nextConfig;
