'use client';

import { clsx } from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { name: '首页', href: '/' },
  { name: '知识体系', href: 'https://gtautocommiter.github.io/code-way/' },
  { name: '博客', href: '/blog' },
  { name: '项目', href: '/projects' },
  { name: '关于', href: '/about' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 glass border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold gradient-text">
          GTAutoCommiter
        </Link>

        <nav className="flex items-center gap-6">
          <ul className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={clsx(
                    'text-sm font-medium transition-colors hover:text-primary-500',
                    pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href))
                      ? 'text-primary-500'
                      : 'text-gray-600 dark:text-gray-400'
                  )}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
