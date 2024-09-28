// components/ProjectCard.jsx
import Image from 'next/image';  // next/image をインポート

const ProjectCard = ({ project }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
    <Image
      src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}${project.image}`} // src は URL やパスを指定
      alt={project.title}
      width={300}  // 必須の width
      height={200} // 必須の height
      className="w-full h-48 object-cover mb-4" // スタイルはカスタム可能
    />
    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
    <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
    <div className="mb-4 flex flex-wrap gap-2">
      {project.tags.map((tag, idx) => (
        <span
          key={idx}
          className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm flex items-center"
        >
          {tag}
        </span>
      ))}
    </div>
    <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline transition-colors duration-200">
      詳細を見る
    </a>
  </div>
);

export default ProjectCard;
