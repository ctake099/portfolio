import Image from 'next/image';
import Link from 'next/link';
import { User, Github, Twitter, Link as LinkIcon } from 'lucide-react';

const ProfileSection = () => (
  <section id="profile" className="mb-16 text-center">
    <div className="mb-8">
      <Image
        src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/latte.jpg`}
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
      <Link
        href="https://github.com/ctake099"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center"
      >
        <Github className="w-5 h-5 mr-1" /> @ctake099
      </Link>
      <Link
        href="https://twitter.com/AIkiwametai"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center"
      >
        <Twitter className="w-5 h-5 mr-1" /> @AIkiwametai
      </Link>
    </div>
    <Link
      href="/blog"
      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full"
    >
      <LinkIcon className="w-5 h-5 mr-2" /> Blog
    </Link>
  </section>
);

export default ProfileSection;
