import Link from '@docusaurus/Link';
import { useBlogPost } from '@docusaurus/theme-common/internal';
import type { Props } from '@theme/BlogPostItem/Header/Title';
import clsx from 'clsx';
import styles from './styles.module.css';

const BlogPostItemHeaderTitle = ({
  className,
}: Props): JSX.Element => {
  const { metadata, isBlogPostPage } = useBlogPost();
  const { permalink, title } = metadata;
  const TitleHeading = isBlogPostPage ? 'h1' : 'h2';
  return (
    <TitleHeading
      className={clsx(styles.title, className)}
      itemProp='headline'
    >
      {isBlogPostPage ? (
        title
      ) : (
        <Link
          itemProp='url'
          to={permalink}
          className={styles.titleLink}
        >{title}</Link>
      )}
    </TitleHeading>
  )
}

export default BlogPostItemHeaderTitle;