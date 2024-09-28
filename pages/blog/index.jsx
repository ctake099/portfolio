import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

export default function Blog({ posts }) {
    return (
      <div className="space-y-6">
        {posts.map((post, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">{post.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{post.date}</p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{post.excerpt}</p>
            {/* <a>タグを削除し、<Link>タグだけでリンクを作成 */}
            <Link href={`/blog/${post.slug}`} className="text-blue-600 dark:text-blue-400 hover:underline transition-colors duration-200">
              続きを読む
            </Link>
          </div>
        ))}
      </div>
    );
  }

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('content/blog'));

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(path.join('content/blog', filename), 'utf-8');
    const { data: frontmatter, content } = matter(markdownWithMeta);

    return {
      title: frontmatter.title,
      date: frontmatter.date,
      excerpt: content.substring(0, 100),  // 最初の100文字を表示
      slug: filename.replace('.md', ''),
    };
  });

  return {
    props: {
      posts,
    },
  };
}
