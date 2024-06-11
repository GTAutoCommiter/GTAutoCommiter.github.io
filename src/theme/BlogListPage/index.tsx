import { HtmlClassNameProvider, PageMetadata, ThemeClassNames } from '@docusaurus/theme-common';
import { Icon } from '@iconify/react';
import { ViewType, useViewType } from '@site/src/hooks/useViewType';
import type { Props } from '@theme/BlogListPage';
import BlogPostItems from '@theme/BlogPostItems';
import SearchMetadata from '@theme/SearchMetadata';
import clsx from 'clsx';
import BlogPostGridItems from '../BlogPostGridItems';
import MyLayout from '../MyLayout';
import styles from './styles.module.scss';

const BlogListPageMetadata = (props: Props): JSX.Element => {
  const { metadata } = props;
  const { blogDescription } = metadata;
  return (<>
    <PageMetadata title={'Blog'} description={blogDescription} />
    <SearchMetadata tag="blog_posts_list" />
  </>)
}

const ViewTypeSwitch = ({
  viewType,
  toggleViewType,
}: {
  viewType: ViewType
  toggleViewType: (viewType: ViewType) => void
}): JSX.Elemen => {
  return (
    <div className={styles.blogSwitchView}>
      <Icon
        icon="ph:list"
        width="24"
        height="24"
        onClick={() => toggleViewType('list')}
        color={viewType === 'list' ? 'var(--ifm-color-primary)' : '#ccc'}
      />
      <Icon
        icon="ph:grid-four"
        width="24"
        height="24"
        onClick={() => toggleViewType('grid')}
        color={viewType === 'grid' ? 'var(--ifm-color-primary)' : '#ccc'}
      />
    </div>
  )
}

const BlogListPageContent = (props: Props) => {
  const { metadata, items } = props;

  const { viewType, toggleViewType } = useViewType();

  const isListView = viewType === 'list'
  const isGridView = viewType === 'grid'
  return (
    <MyLayout>
      <h2 className={styles.blogTitle}>博客</h2>
      <p className={styles.blogDescription}>
        代码人生：编织技术与生活的博客之旅
      </p>
      <ViewTypeSwitch
        viewType={viewType}
        toggleViewType={toggleViewType}
      />
      <div className="row">
        <div className={'col col--12'}>
          <>
            {isListView && (
              <div className={styles.blogList}>
                <BlogPostItems items={items} />
              </div>
            )}
            {isGridView && <BlogPostGridItems items={items} />}
          </>
        </div>
      </div>
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