import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import readingTime from 'reading-time';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export interface PostData {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  tags?: string[];
  readingTime: string;
}

export function getSortedPostsData() {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      const matterResult = matter(fileContents);
      const stats = readingTime(fileContents);

      // Localize reading time
      const minutes = Math.ceil(stats.minutes);
      const readingTimeText = `预计阅读时间 ${minutes} 分钟`;

      return {
        slug,
        readingTime: readingTimeText,
        ...(matterResult.data as { title: string; date: string; excerpt: string; tags?: string[] }),
      };
    });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getPostData(slug: string): Promise<PostData> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);
  const stats = readingTime(fileContents);
  const minutes = Math.ceil(stats.minutes);
  const readingTimeText = `预计阅读时间 ${minutes} 分钟`;

  return {
    slug,
    content: matterResult.content,
    readingTime: readingTimeText,
    ...(matterResult.data as { title: string; date: string; excerpt: string; tags?: string[] }),
  };
}
