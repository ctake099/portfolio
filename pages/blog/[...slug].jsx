// pages/blog/[...slug].jsx

import { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import 'zenn-content-css';
import { CalendarIcon, ClockIcon, ArrowLeft, Twitter, Github } from 'lucide-react';

// Buttonコンポーネント
export function Button({ children, variant, size, ...props }) {
  const baseClass = 'rounded px-4 py-2 transition-colors duration-200';
  const variantClass =
    variant === 'outline'
      ? 'border border-gray-300 text-gray-700 hover:bg-gray-100'
      : 'bg-blue-500 text-white';
  const sizeClass = size === 'sm' ? 'text-sm' : 'text-base';
  return (
    <button className={`${baseClass} ${variantClass} ${sizeClass}`} {...props}>
      {children}
    </button>
  );
}

// Avatarコンポーネント
export function Avatar({ src, alt, size }) {
  const avatarSize = size === 'large' ? 'w-16 h-16' : 'w-10 h-10';
  return (
    <div className={`${avatarSize} rounded-full bg-gray-200 overflow-hidden`}>
      <Image src={src} alt={alt} width={64} height={64} className="w-full h-full object-cover" />
    </div>
  );
}

// Cardコンポーネント
export function Card({ children }) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
      {children}
    </div>
  );
}

// Separatorコンポーネント
export function Separator() {
  return <hr className="border-t border-gray-200 my-8" />;
}

// BlogPostコンポーネント
export default function BlogPost({ frontmatter, content }) {
  useEffect(() => {
    import('zenn-embed-elements');
  }, []);

  return (
    <>
      <Head>
        <title>{frontmatter.title} | Blog</title>
        <meta name="description" content={`${frontmatter.title} - Blog post`} />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/blog">
              <span className="flex items-center text-gray-600 hover:text-gray-900 cursor-pointer">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Blog
              </span>
            </Link>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          <article className="max-w-3xl mx-auto">
            {/* タグとタイトル */}
            {frontmatter.tags && (
              <div className="flex flex-wrap gap-2 mb-4">
                {frontmatter.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <h1 className="text-4xl font-bold mb-4 text-gray-900">{frontmatter.title}</h1>

            {/* 著者情報 */}
            <div className="flex items-center mb-6">
              <Avatar src="/latte.jpg" alt={frontmatter.author} size="large" />
              <div className="ml-4">
                <p className="font-medium text-gray-900">{frontmatter.author}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <CalendarIcon className="w-4 h-4 mr-1" />
                  <span className="mr-4">{frontmatter.date}</span>
                  {frontmatter.readingTime && (
                    <>
                      <ClockIcon className="w-4 h-4 mr-1" />
                      <span>{frontmatter.readingTime} read</span>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* コンテンツ */}
            <div className="prose prose-lg max-w-none znc">
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>

            <Separator />

            {/* 著者カード */}
            <Card>
              <div className="flex items-center mb-4">
                <Avatar src="/latte.jpg" alt={frontmatter.author} size="large" />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">{frontmatter.author}</h3>
                  <p className="text-gray-600">AI Enthusiast / Developer</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Takeru Shingu is passionate about AI and its potential to transform our world. With
                a background in software development, he explores the intersection of technology and
                human creativity.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm">
                  <Twitter className="w-4 h-4 mr-2" />
                  Follow on Twitter
                </Button>
                <Button variant="outline" size="sm">
                  <Link href="https://github.com/ctake099">
                    <span className="flex items-center">
                      <Github className="w-4 h-4 mr-2" />
                      Follow on GitHub
                    </span>
                  </Link>
                </Button>
              </div>
            </Card>
          </article>
        </main>
      </div>

      {/* Zennの埋め込みイベントのためのスクリプト */}
      <script src="https://embed.zenn.studio/js/listen-embed-event.js" async></script>
    </>
  );
}

// getStaticPaths と getStaticProps
export async function getStaticPaths() {
  const fs = await import('fs');
  const path = await import('path');

  const blogDirectory = path.join(process.cwd(), 'content/blog');

  // 再帰的に Markdown ファイルを取得する関数
  const getAllMarkdownFiles = (dirPath, arrayOfFiles = []) => {
    const files = fs.readdirSync(dirPath);

    files.forEach((file) => {
      const fullPath = path.join(dirPath, file);
      if (fs.statSync(fullPath).isDirectory()) {
        arrayOfFiles = getAllMarkdownFiles(fullPath, arrayOfFiles);
      } else if (fullPath.endsWith('.md')) {
        arrayOfFiles.push(fullPath);
      }
    });

    return arrayOfFiles;
  };

  const files = getAllMarkdownFiles(blogDirectory);

  const paths = files.map((filePath) => {
    const relativePath = path.relative(blogDirectory, filePath);
    const slugArray = relativePath.replace(/\.md$/, '').split(path.sep);
    return {
      params: {
        slug: slugArray,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const fs = await import('fs');
  const path = await import('path');
  const matter = (await import('gray-matter')).default;
  const markdownHtml = (await import('zenn-markdown-html')).default;

  const blogDirectory = path.join(process.cwd(), 'content/blog');
  const slugPath = path.join(...params.slug) + '.md';
  const fullPath = path.join(blogDirectory, slugPath);

  if (!fs.existsSync(fullPath)) {
    return {
      notFound: true,
    };
  }

  const markdownWithMeta = fs.readFileSync(fullPath, 'utf-8');
  const { data: frontmatter, content } = matter(markdownWithMeta);
  const contentHtml = markdownHtml(content);

  return {
    props: {
      frontmatter,
      content: contentHtml,
    },
  };
}