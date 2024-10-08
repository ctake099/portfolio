import Link from 'next/link';
import { Pen } from 'lucide-react';

// components/BlogSection.jsx
const BlogSection = ({ posts }) => (
  <section id="blog" className="mb-16 px-4 lg:px-16 xl:px-32">
    <h2 className="text-3xl font-bold mb-8 text-left flex items-center justify-start text-red-600 dark:text-red-400">
      <Pen className="w-8 h-8 mr-2" />
      Blog
    </h2>
    <div className="space-y-6">
      {posts.map((post, index) => (
        <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
          <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">{post.title}</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{post.date}</p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">{post.excerpt}</p>
          <Link href={`/blog/${post.slug.join('/')}`} className="text-blue-600 dark:text-blue-400 hover:underline transition-colors duration-200" passHref>
            続きを読む
          </Link>
        </div>
      ))}
    </div>
  </section>
);

export default BlogSection;
