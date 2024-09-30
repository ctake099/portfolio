import { SquareTerminal } from 'lucide-react';

const InternshipSection = () => (
  <section id="internship" className="mb-16 px-4 lg:px-16 xl:px-32">
    <h2 className="text-3xl font-bold mb-8 text-left flex items-center justify-start text-cyan-600 dark:text-cyan-400">
      <SquareTerminal className="w-8 h-8 mr-2" />
      Internship
    </h2>
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-2">AIコース インターン</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">TOWN株式会社 | 2024年9月 ~ 2024年10月</p>
      <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
      Google Apps Script（GAS）を活用して音声会話から自動的に議事録を作成するシステムを開発。また、Azure Text to Speechを使用して会議内容の音声出力機能を実装。
      会社名から業務名を予測するタスクにも取り組みました。
      </p>
    </div>
  </section>
);

export default InternshipSection;
