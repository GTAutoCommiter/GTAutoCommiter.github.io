import { HtmlClassNameProvider, PageMetadata, ThemeClassNames } from '@docusaurus/theme-common';
import type { Props } from '@theme/BlogListPage';
import SearchMetadata from '@theme/SearchMetadata';
import clsx from 'clsx';
import MyLayout from '../MyLayout';

const BlogListPageMetadata = (props: Props): JSX.Element => {
  const { metadata } = props;
  const { blogDescription } = metadata;
  return (<>
    <PageMetadata title={'Blog'} description={blogDescription} />
    <SearchMetadata tag="blog_posts_list" />
  </>)
}

const BlogListPageContent = (props: Props) => {
  const { metadata, items } = props;


  return (
    <MyLayout>

    </MyLayout>
  )
}

const BlogListPage = (props: Props): JSX.Element => {
  return (
    <HtmlClassNameProvider
      className={clsx(ThemeClassNames.wrapper.blogPages, ThemeClassNames.page.blogListPage)}
    >
      <BlogListPageMetadata {...props} />
      <BlogListPageContent {...props} />
    </HtmlClassNameProvider>
  )
}

export default BlogListPage;