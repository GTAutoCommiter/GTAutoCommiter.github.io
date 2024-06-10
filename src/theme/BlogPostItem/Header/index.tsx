import { useBlogPost } from '@docusaurus/theme-common/internal';
import BlogPostItemHeaderInfo from './Info';
import BlogPostItemHeaderTitle from './Title';

const BlogPostItemHeader = (): JSX.Element => {
  const { isBlogPostPage } = useBlogPost();
  return (
    <header
      style={{
        position: 'relative',
        zIndex: 2,
      }}
    >
      <BlogPostItemHeaderTitle />
      {isBlogPostPage && (
        <>
          <BlogPostItemHeaderInfo />
        </>
      )}
    </header>
  )
}

export default BlogPostItemHeader;