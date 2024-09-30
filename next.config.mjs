/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  ...(isProd
    ? {
        output: 'export',
        distDir: 'docs',
        images: {
          unoptimized: true, // GitHub Pages用に画像最適化を無効
        },
        basePath: '', // カスタムドメインの場合は空に設定
        assetPrefix: '', // カスタムドメインを使う場合はassetPrefixも空に
        trailingSlash: true, // 末尾にスラッシュを付ける
      }
    : {
        // 開発環境の設定
        basePath: '',
        assetPrefix: '',
      }),
  reactStrictMode: true,
};

export default nextConfig;
