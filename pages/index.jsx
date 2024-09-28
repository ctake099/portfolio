"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Moon, Sun, Menu, Mail, Twitter, Github, Code, BookOpen, Briefcase, Pen, GraduationCap, User, Link as LinkIcon, Tag, SquareTerminal } from 'lucide-react'
import Link from 'next/link'

export default function Portfolio() {
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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="top-0 z-10 bg-white dark:bg-gray-800 shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* 左側のコンテンツ */}
          <div className="flex items-center">
            {/* ハンバーガーメニューアイコン */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 mr-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 transition-colors duration-200"
              aria-label="メニューを開閉"
            >
              <Menu className="w-5 h-5" />
            </button>
            {/* ナビゲーションメニュー */}
            <nav className="hidden md:flex space-x-4">
              <Link href="#profile" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">About Me</Link>
              <Link href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">Skills</Link>
              <Link href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">Project</Link>
              <Link href="#blog" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">Blog</Link>
              <Link href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">Contact</Link>
            </nav>
          </div>
          {/* 右側のアイコン */}
          <div className="flex items-center">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 transition-colors duration-200"
              aria-label={darkMode ? "ライトモードに切り替え" : "ダークモードに切り替え"}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
        {/* モバイル用ナビゲーションメニュー */}
        {menuOpen && (
          <nav className="absolute top-16 left-4 bg-white dark:bg-gray-800 shadow-md rounded-md w-48">
            <ul className="py-2">
              <li>
                <Link href="#profile" onClick={() => setMenuOpen(false)} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">About Me</Link>
              </li>
              <li>
                <Link href="#skills" onClick={() => setMenuOpen(false)} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Skills</Link>
              </li>
              <li>
                <Link href="#projects" onClick={() => setMenuOpen(false)} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Project</Link>
              </li>
              <li>
                <Link href="#blog" onClick={() => setMenuOpen(false)} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Blog</Link>
              </li>
              <li>
                <Link href="#contact" onClick={() => setMenuOpen(false)} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Contact</Link>
              </li>
            </ul>
          </nav>
        )}
      </header>



      <main className="container mx-auto px-4 py-8">
        <section id="profile" className="mb-16 text-center">
          <div className="mb-8">
            <Image
              src={`${process.env.assetPrefix}/latte.jpg`}
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
        <section id="about" className="mb-16 px-4 lg:px-16 xl:px-32">  {/* Adjusting padding for both sides */}
          <h2 className="text-3xl font-bold mb-2 text-left flex items-center justify-start text-blue-600 dark:text-blue-400">
            <BookOpen className="w-8 h-8 mr-2" />
            About Me
          </h2>
          <div className="max-w-4xl mx-auto pl-10 space-y-4 text-left">  {/* Adding padding to indent the text */}
            <div className="flex items-center justify-start mb-4">
              <GraduationCap className="w-6 h-6 mr-2 text-gray-600 dark:text-gray-400" />
              <h3 className="text-lg">東京工科大学コンピュータサイエンス学部人工知能専攻 B3</h3>
            </div>
            <p>大学以外で、オンライン学習サイト「Recursion」を使用して、CSを勉強中</p>
            <p>低レイヤーのプログラミングに興味あり、勉強中。コンパイラ作りたい</p>
          </div>
        </section>


        <section id="skills" className="mb-16 px-4 lg:px-16 xl:px-32">  {/* Adjust padding for different screen sizes */}
          <h2 className="text-3xl font-bold mb-2 text-left flex items-center justify-start text-green-600 dark:text-green-400">
            <Code className="w-8 h-8 mr-2" />
            Skills
          </h2>
          <div className="max-w-4xl mx-auto pl-10 space-y-4 text-left text-lg">  {/* Adding padding to indent the text */}
            <h3 className="font-semibold">Programming Languages</h3>
            <p>Python, JavaScript, Java, C, PHP</p>

            <h3 className="font-semibold">Frameworks and Tools</h3>
            <p>Django, Next.js</p>

            <h3 className="font-semibold">DevOps Tools</h3>
            <p>AWS, Azure, Github</p>
          </div>
        </section>


        <section id="projects" className="mb-16 px-4 lg:px-16 xl:px-32">
          <h2 className="text-3xl font-bold mb-8 text-left flex items-center justify-start text-purple-600 dark:text-purple-400">
            <Briefcase className="w-8 h-8 mr-2" />
            Project
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "ToDoアプリ",
                description: "ReactとDjango Rest Frameworkを使用したタスク管理アプリ。ユーザー認証、タスクのCRUD操作、締め切り通知機能を実装。",
                image: "/placeholder.svg?height=200&width=300",
                tags: ["React", "Django", "REST API"]
              },
              {
                title: "チャットメッセンジャー",
                description: "TCP/UDPプロトコルを利用したCUIベースのチャットアプリケーション。複数ユーザーによるリアルタイムコミュニケーションを実現。",
                image: "/placeholder.svg?height=200&width=300",
                tags: ["Python", "ネットワーク", "マルチスレッド"]
              },
              {
                title: "テトリス",
                description: "JavaScriptを使用したチーム開発プロジェクト。モダンなUIと高速な描画処理を実現し、複数難易度モードを実装。",
                image: "/placeholder.svg?height=200&width=300",
                tags: ["JavaScript", "Canvas", "チーム開発"]
              },
            ].map((project, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                <img src={`${process.env.assetPrefix}${project.image}`} alt={project.title} className="w-full h-48 object-cover mb-4" />
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm flex items-center">
                      <Tag className="w-3 h-3 mr-2" />
                      {tag}
                    </span>
                  ))}
                </div>
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline transition-colors duration-200">詳細を見る</a>
              </div>
            ))}
          </div>
        </section>

        <section id="internship" className="mb-16 px-4 lg:px-16 xl:px-32">
          <h2 className="text-3xl font-bold mb-8 text-left flex items-center justify-start text-cyan-600 dark:text-cyan-400">
            <SquareTerminal className="w-8 h-8 mr-2" />
            Internship
          </h2>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">ソフトウェアエンジニア インターン</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">テックコープ株式会社 | 2023年7月1日 〜 2023年8月31日</p>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              クラウドベースのプロジェクト管理ツールの機能開発に携わり、バックエンドAPIの設計と実装を担当。
              また、データベースクエリの最適化プロジェクトに参加し、パフォーマンス改善に貢献しました。
              アジャイル開発手法を実践し、日々の開発プロセス改善にも取り組みました。
            </p>
          </div>
        </section>

        <section id="blog" className="mb-16 px-4 lg:px-16 xl:px-32">
          <h2 className="text-3xl font-bold mb-8 text-left flex items-center justify-start text-red-600 dark:text-red-400">
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
        <section id="contact" className="mb-16 px-4 lg:px-16 xl:px-32">
          <h2 className="text-3xl font-bold mb-8 text-left flex items-center justify-start text-yellow-600 dark:text-yellow-400">
            <Mail className="w-8 h-8 mr-2" />
            Contact
          </h2>
          <div className="max-w-md mx-auto text-center space-y-4">
            <div className="flex justify-left space-x-4">
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