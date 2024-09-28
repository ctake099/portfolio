/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NEXT_PUBLIC_ASSET_PREFIX,  // .env.localから読み込み
  assetPrefix: process.env.NEXT_PUBLIC_ASSET_PREFIX,  // .env.localから読み込み
  reactStrictMode: true,
};

export default nextConfig;
