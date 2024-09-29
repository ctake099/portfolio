/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  ...(isProd
    ? {
        output: 'export',
        distDir: 'docs',
        images: {
          unoptimized: true,
        },
        basePath: process.env.NEXT_PUBLIC_ASSET_PREFIX,
        assetPrefix: process.env.NEXT_PUBLIC_ASSET_PREFIX,
        trailingSlash: true,
      }
    : {
        // 開発環境の設定
      }),
  reactStrictMode: true,
};

export default nextConfig;
