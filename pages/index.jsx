"use client"

import { useState, useEffect } from 'react'
import PortfolioComponent from "../components/Portfolio"; // インポート名を変更
import Image from 'next/image'
import {
  Moon, Sun, Menu, Mail, Twitter, Github, Code, BookOpen, Briefcase,
  Pen, GraduationCap, User, Link as LinkIcon, Tag, SquareTerminal
} from 'lucide-react'
import Link from 'next/link'

export default function Home() { // 関数名を 'Home' に変更
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
    <PortfolioComponent /> // 修正したコンポーネント名を使用
  )
}

