import { BookOpen, GraduationCap } from 'lucide-react';

const AboutSection = () => (
  <section id="about" className="mb-16 px-4 lg:px-16 xl:px-32">
    <h2 className="text-3xl font-bold mb-2 text-left flex items-center justify-start text-blue-600 dark:text-blue-400">
      <BookOpen className="w-8 h-8 mr-2" />
      About Me
    </h2>
    <div className="max-w-4xl mx-auto pl-10 space-y-4 text-left">
      <div className="flex items-center justify-start mb-4">
        <GraduationCap className="w-6 h-6 mr-2 text-gray-600 dark:text-gray-400" />
        <h3 className="text-lg">東京工科大学コンピュータサイエンス学部人工知能専攻 B2</h3>
      </div>
      <p>Web開発とLLMと強化学習に興味があります。</p>
      <p>CSについて幅広く勉強中。。。</p>
    </div>
  </section>
);

export default AboutSection;
