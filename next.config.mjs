/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,  // 画像最適化を無効にする
  },
  // basePath: '/portfolio',
  // assetPrefix: '/portfolio',  // ここで静的ファイルのパスを指定
  reactStrictMode: true,
};

export default nextConfig;
