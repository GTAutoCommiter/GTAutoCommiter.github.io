'use client';

import GiscusReact from '@giscus/react';
import { useTheme } from 'next-themes';

export default function Giscus() {
  const { theme } = useTheme();

  return (
    <div className="mt-10 pt-10 border-t">
      <GiscusReact
        id="comments"
        repo="GTAutoCommiter/GTAutoCommiter.github.io"
        repoId="R_kgDOME4Y5A" // This needs to be provided by the user, but I'll use a placeholder or explain.
        category="Announcements"
        categoryId="DIC_kwDOME4Y5M4Cfg-Z"
        mapping="pathname"
        term="Welcome to my blog!"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={theme === 'dark' ? 'dark' : 'light'}
        lang="zh-CN"
        loading="lazy"
      />
    </div>
  );
}
