import { getSortedPostsData } from '@/lib/markdown';
import { ArrowRight, BookOpen, Code, Github } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const latestPosts = getSortedPostsData().slice(0, 3);

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="py-10 md:py-20 flex flex-col items-center text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          你好，我是 <span className="gradient-text">GTAutoCommiter</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
          一名前端背景深厚的全栈开发工程师，致力于构建高质量、高性能且美观的全栈 Web 应用程序。
        </p>
        <div className="flex gap-4">
          <Link
            href="/blog"
            className="flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-full font-medium transition-all transform hover:scale-105"
          >
            阅读博客 <BookOpen className="w-4 h-4" />
          </Link>
          <Link
            href="https://github.com/GTAutoCommiter"
            target="_blank"
            className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 px-6 py-3 rounded-full font-medium transition-all transform hover:scale-105"
          >
            GitHub <Github className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Skills/Focus */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: Code, title: '整洁代码', desc: '编写可维护、可扩展且易于测试的代码。' },
          { icon: ArrowRight, title: '极致性能', desc: '针对速度、SEO 和用户体验进行全方位优化。' },
          { icon: Github, title: '开源热忱', desc: '活跃的开源贡献者，自动化工作流发烧友。' },
        ].map((item, i) => (
          <div key={i} className="p-6 rounded-2xl border hover:border-primary-500/50 transition-colors bg-card">
            <item.icon className="w-10 h-10 text-primary-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-gray-500">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Latest Posts */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">最新文章</h2>
          <Link href="/blog" className="text-primary-500 hover:underline flex items-center gap-1">
            查看全部 <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
              <div className="space-y-4">
                <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden mb-4 group-hover:opacity-90 transition-opacity">
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    封面图
                  </div>
                </div>
                <p className="text-sm text-gray-500">{post.date} · {post.readingTime}</p>
                <h3 className="text-xl font-bold group-hover:text-primary-500 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 line-clamp-2">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
          {latestPosts.length === 0 && (
            <p className="col-span-3 text-center text-gray-500 italic py-10">
              暂无文章，敬请期待！
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
