const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 静态导出
  output: 'export',

  // 禁用 Next.js 的图片优化，以支持静态导出
  images: { unoptimized: true },

  // 将所有路径相关的配置删除或设置为空字符串
  basePath: '',
  assetPrefix: '',
  env: {
    NEXT_PUBLIC_BASE_PATH: '',
  },
};

export default nextConfig;