import { Github, Globe } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: '项目',
  description: '展示我最近开发的作品及开源贡献。',
};

const projects = [
  {
    title: 'GTAutoCommiter',
    description: '一个用于自动管理 Git 提交和 GitHub 工作流的工具。',
    tech: ['TypeScript', 'GitHub Actions', 'Node.js'],
    github: 'https://github.com/GTAutoCommiter',
    demo: 'https://gtautocommiter.github.io',
  },
  {
    title: 'AI 编码助手',
    description: '一个实验性的 VS Code AI 插件，旨在加速架构设计决策。',
    tech: ['OpenAI', 'React', 'Extension API'],
    github: '#',
    demo: '#',
  },
];

export default function ProjectsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">项目展示</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          我最近构建的一些有趣的东西。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.title} className="p-6 rounded-3xl border hover:border-primary-500/50 transition-all bg-card group">
            <h2 className="text-2xl font-bold mb-3 group-hover:text-primary-500 transition-colors">
              {project.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map(t => (
                <span key={t} className="text-xs px-2 py-1 rounded-full bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400">
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <Link
                href={project.github}
                className="flex items-center gap-1 text-sm font-medium hover:text-primary-500"
              >
                <Github className="w-4 h-4" /> 源码
              </Link>
              <Link
                href={project.demo}
                className="flex items-center gap-1 text-sm font-medium hover:text-primary-500"
              >
                <Globe className="w-4 h-4" /> 演示
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
