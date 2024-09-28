
"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Moon, Sun, Mail, Twitter, Github, Code, BookOpen, Briefcase, Pen, GraduationCap, User, Link as LinkIcon } from 'lucide-react'
import Link from 'next/link'

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false); // 初期値を false に設定
  const [mounted, setMounted] = useState(false);

  // マウント時の処理
  useEffect(() => {
    setMounted(true);

    // マウント後に localStorage から設定を取得
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedDarkMode); // ここで darkMode を設定
  }, []);

  // ダークモードの適用と保存
  useEffect(() => {
    if (mounted) { // マウント完了後に実行
      if (darkMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem("darkMode", "true");
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem("darkMode", "false");
      }
    }
  }, [darkMode, mounted]); // mounted も依存に追加

  // クライアントサイドのマウントが完了するまでUIを表示しない
  if (!mounted) return null;
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="sticky top-0 z-10 bg-white dark:bg-gray-800 shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <nav className="flex space-x-4">
            <Link href="#profile" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">About Me</Link>
            <Link href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">Skills</Link>
            <Link href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">Project</Link>
            <Link href="#blog" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">Blog</Link>
            <Link href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">Contact</Link>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 transition-colors duration-200"
              aria-label={darkMode ? "ライトモードに切り替え" : "ダークモードに切り替え"}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </nav>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <section id="profile" className="mb-16 text-center">
          <div className="mb-8">
            <Image
              src="/latte.jpg"
              alt="新宮 尊"
              width={200}
              height={200}
              className="rounded-full border-4 border-blue-500 dark:border-blue-400 mx-auto"
              priority
            />
          </div>
          <h2 className="text-3xl font-bold mb-4 flex items-center justify-center text-blue-600 dark:text-blue-400">
            <User className="w-8 h-8 mr-2" />
            Takeru Shingu
          </h2>
          <p className="mb-4 text-xl">Hello!👋</p>
          <div className="flex justify-center space-x-4 mb-6">
            <a href="https://github.com/ctake099" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
              <Github className="w-5 h-5 mr-1" /> @ctake099
            </a>
            <a href="https://twitter.com/AIkiwametai" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
              <Twitter className="w-5 h-5 mr-1" /> @AIkiwametai
            </a>
          </div>
          <a href="#Blog" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
            <LinkIcon className="w-5 h-5 mr-2" /> Blog
          </a>
        </section>
        <section id="about" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center text-blue-600 dark:text-blue-400">
            <BookOpen className="w-8 h-8 mr-2" />
            About Me
          </h2>
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="flex items-center justify-center mb-4">
              <GraduationCap className="w-6 h-6 mr-2 text-gray-600 dark:text-gray-400" />
              <p className="text-lg">東京工科大学コンピュータサイエンス学部人工知能専攻 B3</p>
            </div>
            <p>大学以外で、オンライン学習サイト「Recursion」を使用して、CSを勉強中</p>
            <p>低レイヤーのプログラミングに興味あり、勉強中。コンパイラ作りたい</p>
            <p>これまでに、以下のような学習をしてきました：</p>
            <ul className="list-disc list-inside space-y-2 pl-6">
              <li>Recursionのチーム開発で2週間でテトリスを作成。JavaScriptを使用</li>
              <li>Recursionの2回目のチーム開発で3週間でOnline Chat Messengerを作成。Pythonを使用</li>
              <li>アルゴリズム、データ構造、OOPの学習でJavaを使用</li>
              <li>MarkdownToHTMLの開発でPHPを使用</li>
              <li>学校の講義と自分自身の学習でC言語を勉強中。低レイヤーに興味あり</li>
            </ul>
            <p>さらに、このサイトや他のウェブアプリケーションの開発にはHTML、CSS、Bootstrapを使用しています。 また、AWS EC2、NGINX、VirtualBox、GitHubなどのツールを活用しています。</p>
          </div>
        </section>
        <section id="skills" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center text-green-600 dark:text-green-400">
            <Code className="w-8 h-8 mr-2" />
            Skills
          </h2>
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="font-semibold mb-2">Programming Languages</h3>
              <p>Python, JavaScript, Java, C, PHP</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="font-semibold mb-2">Frameworks and Tools</h3>
              <p>Django, Django Rest Framework, React</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="font-semibold mb-2">Frontend Technologies</h3>
              <p>HTML, CSS, Bootstrap</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="font-semibold mb-2">Databases</h3>
              <p>MySQL, SQLite</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="font-semibold mb-2">DevOps Tools</h3>
              <p>AWS EC2, NGINX, VirtualBox, GitHub</p>
            </div>
          </div>
        </section>
        <section id="projects" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center text-purple-600 dark:text-purple-400">
            <Briefcase className="w-8 h-8 mr-2" />
            Project
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'ToDo App', description: 'ReactとDjango Rest Frameworkで作成したTodoアプリ' },
              { title: 'ChatMessenger', description: 'TCP/UDPを使用し、CUI上でできるチャットアプリ' },
              { title: 'Portfolio', description: 'このサイトの紹介' },
              { title: 'Tetris', description: '初めてのチーム開発で作成したTetris' },
              { title: 'Markdown to HTML Converter', description: 'MarkdownをHTMLに変換するWebアプリ' }
            ].map((project, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                <h3 className="text-xl font-semibold mb-2 text-purple-600 dark:text-purple-400">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline transition-colors duration-200">詳細を見る</a>
              </div>
            ))}
          </div>
        </section>
        <section id="blog" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center text-gray-800 dark:text-gray-200">
            <Pen className="w-8 h-8 mr-2" />
            Blog
          </h2>
          <div className="space-y-6">
            {[
              { title: '自己紹介', date: '2023年9月1日', excerpt: '私について詳しく知ってください...' },
              { title: '好きなこと', date: '2023年8月15日', excerpt: '私の趣味や興味について...' }
            ].map((post, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">{post.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{post.date}</p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{post.excerpt}</p>
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline transition-colors duration-200">続きを読む</a>
              </div>
            ))}
          </div>
        </section>
        <section id="contact" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center text-yellow-600 dark:text-yellow-400">
            <Mail className="w-8 h-8 mr-2" />
            Contact
          </h2>
          <div className="max-w-md mx-auto text-center space-y-4">
            <div className="flex justify-center space-x-4">
              ctake0099[ at ]gmail.com
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-200 dark:bg-gray-800 py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} 新宮 尊. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}