// pages/index.jsx

import Portfolio from "../components/Portfolio"; // インポート名を変更
import { useState, useEffect } from 'react'
import Image from 'next/image'
import {
  Moon, Sun, Menu, Mail, Twitter, Github, Code, BookOpen, Briefcase,
  Pen, GraduationCap, User, Link as LinkIcon, Tag, SquareTerminal
} from 'lucide-react'
import Link from 'next/link'

export default function Home({ posts }) { // propsとしてpostsを受け取る
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // クライアントサイドで `localStorage` からダークモードの状態を取得
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedDarkMode = localStorage.getItem('darkMode') === 'true';
      setDarkMode(storedDarkMode);
    }
  }, []);

  // ダークモードの適用と保存
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    if (typeof window !== 'undefined') {
      localStorage.setItem('darkMode', darkMode);
    }
  }, [darkMode]);

  return (
    <Portfolio posts={posts}/> // 修正したプロップ名を使用
  )
}

// getStaticProps 関数
export async function getStaticProps() {
  const fs = await import('fs');
  const path = await import('path');
  const matter = (await import('gray-matter')).default;
  const markdownToTxt = (await import('markdown-to-txt')).default;

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

  const blogDirectory = path.join(process.cwd(), 'content/blog');
  const files = getAllMarkdownFiles(blogDirectory);

  const posts = files.map((filePath) => {
    const markdownWithMeta = fs.readFileSync(filePath, 'utf-8');
    const { data: frontmatter, content } = matter(markdownWithMeta);

    const relativePath = path.relative(blogDirectory, filePath);
    const slugArray = relativePath.replace(/\.md$/, '').split(path.sep);

    return {
      title: frontmatter.title,
      date: frontmatter.date,
      excerpt: markdownToTxt(content.substring(0, 100)), // 最初の100文字を表示
      slug: slugArray,
    };
  });

  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  return {
    props: {
      posts,
    },
  };
}
