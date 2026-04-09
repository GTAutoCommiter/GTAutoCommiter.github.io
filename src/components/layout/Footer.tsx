export default function Footer() {
  return (
    <footer className="border-t py-8 mt-auto">
      <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} GTAutoCommiter. 保留所有权利。</p>
        <p className="mt-2">使用 Next.js, Tailwind CSS 和 ❤️ 构建</p>
      </div>
    </footer>
  );
}
