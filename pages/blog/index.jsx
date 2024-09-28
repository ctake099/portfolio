import Link from 'next/link';
import Image from 'next/image';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export default function Blog({ posts }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* 左側: プロフィール */}
        <div className="col-span-1 md:col-span-1 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="text-center mb-6">
            <Image
              src="/images/profile-pic.png" // プロフィール画像
              alt="プロフィール"
              width={100}
              height={100}
              className="rounded-full mx-auto"
            />
            <h2 className="text-2xl font-bold mt-4">Takeru Shingu</h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">AI Enthusiast / Developer</p>
          </div>

          {/* SNSリンク */}
          <div className="flex justify-center space-x-4 mt-4">
            <Link href="https://github.com/ctake099" passHref>
              <a target="_blank" className="text-gray-600 dark:text-gray-400 hover:text-gray-900">
                <i className="fab fa-github fa-lg"></i> GitHub
              </a>
            </Link>
            <Link href="https://twitter.com/AIkiwametai" passHref>
              <a target="_blank" className="text-gray-600 dark:text-gray-400 hover:text-blue-500">
                <i className="fab fa-twitter fa-lg"></i> Twitter
              </a>
            </Link>
          </div>

          {/* 基本情報 */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold">プロフィール</h3>
            <ul className="mt-4 space-y-2">
              <li>投稿数: {posts.length} 記事</li>
              <li>読者数: 89人</li>
              {/* 他の情報も追加可能 */}
            </ul>
          </div>
        </div>

        {/* 右側: 記事一覧 */}
        <div className="col-span-1 md:col-span-2 space-y-6">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                {post.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{post.date}</p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`}>
                <a className="text-blue-600 dark:text-blue-400 hover:underline transition-colors duration-200">
                  続きを読む
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('content/blog'));

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join('content/blog', filename),
      'utf-8'
    );
    const { data: frontmatter, content } = matter(markdownWithMeta);

    return {
      title: frontmatter.title,
      date: frontmatter.date,
      excerpt: content.substring(0, 100), // 最初の100文字を表示
      slug: filename.replace('.md', ''),
    };
  });

  return {
    props: {
      posts,
    },
  };
}
