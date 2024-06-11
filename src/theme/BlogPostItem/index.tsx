import { useBlogPost } from '@docusaurus/theme-common/internal';
import type { Props } from '@theme/BlogPostItem';
import clsx from 'clsx';
import BlogPostItemContainer from "./Container";
import BlogPostItemContent from './Content';
import BlogPostItemFooter from './Footer';
import BlogPostItemHeader from "./Header";

const useContainerClassName = () => {
  const { isBlogPostPage } = useBlogPost();
  return !isBlogPostPage ? 'blog-card margin-bottom-lg' : ''
}

const BlogPostItem = ({ children, className }: Props): JSX.Element => {

  const containClassName = useContainerClassName();

  return (
    <BlogPostItemContainer
      className={clsx(containClassName, className)}
    >
      <BlogPostItemHeader />
      <BlogPostItemContent>
        {children}
      </BlogPostItemContent>
      <BlogPostItemFooter />
    </BlogPostItemContainer>
  )
}

export default BlogPostItem;