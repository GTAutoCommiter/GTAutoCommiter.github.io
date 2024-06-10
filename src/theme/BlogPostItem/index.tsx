import { useBlogPost } from '@docusaurus/theme-common/internal';
import clsx from 'clsx';
import BlogPostItemContainer from "./Container";
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
    </BlogPostItemContainer>
  )
}

export default BlogPostItem;