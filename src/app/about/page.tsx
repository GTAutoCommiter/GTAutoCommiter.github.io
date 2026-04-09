export const metadata = {
  title: '关于',
  description: '更多关于 GTAutoCommiter 及其职业背景的信息。',
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-12 py-10">
      <div className="space-y-6">
        <h1 className="text-4xl font-extrabold tracking-tight">关于我</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
          我是一名拥有丰富实战经验的全栈开发工程师。我不仅在前端领域（React、Next.js）有深厚积淀，
          同时也热衷于探索后端技术架构（Node.js、Go）及自动化开发者工作流，致力于提供端到端的完美解决方案。
        </p>
      </div>

      <div className="prose dark:prose-invert prose-lg">
        <h2>经验与愿景</h2>
        <p>
          在我的职业生涯中，我始终坚持“技术服务于业务”的理念。
          我擅长将复杂的设计转化为流畅的用户体验，并能通过高效的后端逻辑确保系统的高可用性与可扩展性。
        </p>

        <h2>技术栈</h2>
        <ul>
          <li><strong>核心语言:</strong> TypeScript, JavaScript, Go, Rust</li>
          <li><strong>前端框架:</strong> React, Next.js, Tailwind CSS</li>
          <li><strong>后端与工程:</strong> Node.js, GraphQL, Docker, GitHub Actions</li>
          <li><strong>数据库:</strong> PostgreSQL, Redis, MongoDB</li>
        </ul>

        <h2>联系方式</h2>
        <p>
          欢迎通过邮件与我联系，或在 GitHub 上关注我的最新动态。
        </p>
      </div>
    </div>
  );
}
