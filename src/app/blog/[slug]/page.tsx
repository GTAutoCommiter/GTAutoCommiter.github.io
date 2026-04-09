import Giscus from '@/components/blog/Giscus';
import { getPostData, getSortedPostsData } from '@/lib/markdown';
import 'highlight.js/styles/github-dark.css';
import ReactMarkdown from 'react-markdown';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPostData(params.slug);
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPostData(params.slug);

  return (
    <article className="max-w-4xl mx-auto py-10">
      <div className="space-y-4 mb-10 text-center">
        <p className="text-primary-500 font-medium">{post.date} · {post.readingTime}</p>
        <h1 className="text-4xl md:text-5xl font-extrabold">{post.title}</h1>
        <div className="flex justify-center gap-2">
          {post.tags?.map(tag => (
            <span key={tag} className="text-sm border px-3 py-1 rounded-full">
              #{tag}
            </span>
          ))}
        </div>
      </div>

      <div className="prose dark:prose-invert prose-lg max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[
            rehypeRaw,
            rehypeHighlight,
            rehypeSlug,
            [rehypeAutolinkHeadings, { behavior: 'wrap' }],
          ]}
        >
          {post.content}
        </ReactMarkdown>
      </div>

      <Giscus />
    </article>
  );
}
