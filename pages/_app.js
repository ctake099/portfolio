import { useEffect } from 'react';
import 'zenn-content-css';  // ZennのCSSを読み込む
import "@/styles/globals.css";  // グローバルスタイルを適用

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Zennの埋め込みスクリプトを読み込む
    const script = document.createElement('script');
    script.src = 'https://embed.zenn.studio/js/listen-embed-event.js';
    script.async = false;  // asyncを無効にして、正しく埋め込みを行う
    document.head.appendChild(script);

    // Zennの埋め込み要素を動的にインポート
    import('zenn-embed-elements').catch(err => console.error('Failed to load zenn-embed-elements', err));
  }, []);

  return <Component {...pageProps} />;
}
