import { getSortedPostsData } from '@/lib/markdown';
import Link from 'next/link';

export const metadata = {
  title: '博客',
  description: '分享关于前端开发、软件架构和技术成长的思考。',
};

export default function BlogPage() {
  const posts = getSortedPostsData();

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">博客</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          记录技术点滴，分享开发经验。
        </p>
      </div>

      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.slug} className="group relative border-b pb-8 last:border-0">
            <Link href={`/blog/${post.slug}`} className="block">
              <div className="space-y-2">
                <p className="text-sm text-gray-500">{post.date} · {post.readingTime}</p>
                <h2 className="text-2xl font-bold group-hover:text-primary-500 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex gap-2">
                  {post.tags?.map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </article>
        ))}
        {posts.length === 0 && (
          <div className="text-center py-20 bg-gray-50 dark:bg-gray-900 rounded-3xl">
            <p className="text-gray-500">正在努力创作中... ✍️</p>
          </div>
        )}
      </div>
    </div>
  );
}
