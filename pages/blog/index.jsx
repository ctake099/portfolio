import Link from 'next/link';
import Image from 'next/image';
import { Github, Twitter, User, Calendar, ArrowRight } from 'lucide-react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export default function Home({ posts }) {
  return (
    <div className="min-h-screen bg-gray-100"> {/* 背景を薄いグレーに変更 */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Profile Section */}
          <div className="col-span-1">
            <div className="sticky top-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                <div className="relative h-48 bg-gradient-to-r from-blue-500 to-purple-600">
                  <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                    <Image
                      src="/latte.jpg"
                      alt="Takeru Shingu"
                      width={100}
                      height={100}
                      className="rounded-full border-4 border-white dark:border-gray-800"
                    />
                  </div>
                </div>
                <div className="pt-16 pb-8 px-6 text-center">
                  <h2 className="text-2xl font-bold mb-2 flex items-center justify-center text-black">
                    <User className="w-6 h-6 mr-2 text-blue-500" />
                    @ctake099
                  </h2>
                  <p className="text-black mb-6">Developer</p> {/* テキストを黒に変更 */}
                  <div className="flex justify-center space-x-4 mb-6">
                    <Link
                      href="https://github.com/ctake099"
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors duration-200"
                    >
                      <Github className="w-6 h-6" />
                    </Link>
                    <Link
                      href="https://twitter.com/AIkiwametai"
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors duration-200"
                    >
                      <Twitter className="w-6 h-6" />
                    </Link>
                  </div>
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                    <div className="flex justify-center">
                      <div>
                        <p className="text-2xl font-bold text-blue-500">{posts ? posts.length : 0}</p>
                        <p className="text-sm text-black">Posts</p> {/* テキストを黒に変更 */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Posts */}
          <div className="col-span-1 lg:col-span-2 space-y-8">
            {posts.map((post, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-black">{post.title}</h3> {/* タイトルを黒に変更 */}
                  <p className="text-black text-sm mb-4 flex items-center"> {/* テキストを黒に変更 */}
                    <Calendar className="w-4 h-4 mr-2" />
                    {post.date}
                  </p>
                  <p className="text-black mb-4">{post.excerpt}</p> {/* 抜粋を黒に変更 */}
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-blue-500 hover:text-blue-600 transition-colors duration-200"
                  >
                    続きを読む
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const getAllFiles = (dirPath, arrayOfFiles = []) => {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    if (fs.statSync(path.join(dirPath, file)).isDirectory()) {
      arrayOfFiles = getAllFiles(path.join(dirPath, file), arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, file));
    }
  });

  return arrayOfFiles;
};


export async function getStaticProps() {
  const dirPath = path.join('content/blog');
  const files = getAllFiles(dirPath).filter((file) => file.endsWith('.md')); // .md ファイルのみを対象にする

  const posts = files.map((filePath) => {
    const markdownWithMeta = fs.readFileSync(filePath, 'utf-8');
    const { data: frontmatter, content } = matter(markdownWithMeta);

    return {
      title: frontmatter.title,
      date: frontmatter.date,
      excerpt: content.substring(0, 100), // 最初の100文字を表示
      slug: filePath
        .replace(`${dirPath}/`, '') // `content/blog/` の部分を削除
        .replace('.md', ''), // `.md` 拡張子を削除
    };
  });

  return {
    props: {
      posts,
    },
  };
}

