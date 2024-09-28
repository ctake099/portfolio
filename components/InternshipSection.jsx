import { SquareTerminal } from 'lucide-react';

const InternshipSection = () => (
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
      </p>
    </div>
  </section>
);

export default InternshipSection;
