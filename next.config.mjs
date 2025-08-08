const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: isProd ? '/my-portfolio-bootstrap' : '',
  assetPrefix: isProd ? '/my-portfolio-bootstrap/' : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? '/my-portfolio-bootstrap' : '',
  },
};

export default nextConfig;
