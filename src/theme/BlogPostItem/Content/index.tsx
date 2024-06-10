import { useBlogPost } from '@docusaurus/theme-common/internal';
import { blogPostContainerID } from '@docusaurus/utils-common';
import MDXContent from '@theme/MDXContent';
import clsx from 'clsx';

const BlogPostItemContent = ({ children, className }: Props): JSX.Element => {
  const { isBlogPostPage } = useBlogPost();
  return (
    <div
      id={isBlogPostPage ? blogPostContainerID : undefined}
      className={clsx('markdown', className)}
      itemProp="articleBody"
      style={{ position: 'relative' }}
    >
      <MDXContent>{children}</MDXContent>
    </div>
  )
}

export default BlogPostItemContent;