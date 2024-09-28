import { useState, useEffect } from 'react';
import { Menu, Moon, Sun } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedDarkMode = localStorage.getItem('darkMode') === 'true';
      setDarkMode(storedDarkMode);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <header className="top-0 z-10 bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 mr-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <Menu className="w-5 h-5" />
          </button>
          <nav className="hidden md:flex space-x-4">
            <Link href="#profile">About Me</Link>
            <Link href="#skills">Skills</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#blog">Blog</Link>
            <Link href="#contact">Contact</Link>
          </nav>
        </div>
        <div className="flex items-center">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label={darkMode ? 'ライトモード' : 'ダークモード'}
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav className="absolute top-16 left-4 bg-white dark:bg-gray-800 shadow-md rounded-md w-48">
          <ul className="py-2">
            <li>
              <Link href="#profile" onClick={() => setMenuOpen(false)}>About Me</Link>
            </li>
            <li>
              <Link href="#skills" onClick={() => setMenuOpen(false)}>Skills</Link>
            </li>
            <li>
              <Link href="#projects" onClick={() => setMenuOpen(false)}>Projects</Link>
            </li>
            <li>
              <Link href="#blog" onClick={() => setMenuOpen(false)}>Blog</Link>
            </li>
            <li>
              <Link href="#contact" onClick={() => setMenuOpen(false)}>Contact</Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
