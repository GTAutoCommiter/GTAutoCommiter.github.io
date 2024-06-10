import { translate } from '@docusaurus/Translate';
import { usePluralForm } from '@docusaurus/theme-common';
import { useBlogPost, useDateTimeFormat } from '@docusaurus/theme-common/internal';
import { Icon } from '@iconify/react';
import Tag from '@site/src/theme/Tag';
import type { Props } from "@theme/BlogPostItem/Header/Info";
import clsx from 'clsx';
import styles from './styles.module.css';

const useReadingTimePlural = () => {
  const { selectMessage } = usePluralForm();
  return (readingTimeFloat: number) => {
    const readingTime = Math.ceil(readingTimeFloat);
    return selectMessage(
      readingTime,
      translate(
        {
          id: 'theme.blog.post.readingTime.plurals',
          description:
            'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',
          message: 'One min read|{readingTime} min read',
        },
        { readingTime },
      )
    )
  }
}

const ReadingTime = ({ readingTime }: { readingTime: number }) => {
  const readingTimePlural = useReadingTimePlural();
  return <span className="truncate">{readingTimePlural(readingTime)}</span>
}

const BlogPostItemHeaderInfo = ({ className }: Props): JSX.Element => {
  const { metadata } = useBlogPost();
  const { date, tags, readingTime } = metadata;

  const tagsExists = tags?.length > 0;

  const dateTimeFormat = useDateTimeFormat({
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });

  const formatDate = (blogDate: string) => dateTimeFormat.format(new Date(blogDate));

  return (
    <div
      className={clsx(styles.container, 'margin-bottom-md', className)}
    >
      <div className={styles.date}>
        <Icon icon="ri:calendar-line" />
        <DateTime
          data={date}
          formattedDate={formatDate(date)}
        />
      </div>
      {tagsExists && (
        <div
          className={styles.tagInfo}
        >
          <Icon icon="ri:price-tag-3-line" />
          <div
            className={clsx('truncate', styles.tagList)}
          >
            {tags.slice(0, 3).map(({ label, permalink: tagPermalink }, index) => {
              return (
                <div key={tagPermalink}>
                  {index !== 0 && '/'}
                  <Tag
                    label={label}
                    permalink={tagPermalink}
                    className={'tag'}
                  />
                </div>
              )
            })}
          </div>
        </div>
      )}
      {typeof readingTime !== 'undefined' && (
        <div className={styles.date}>
          <Icon icon="ri:time-line" />
          <ReadingTime readingTime={readingTime} />
        </div>
      )}
    </div>
  )
}

export default BlogPostItemHeaderInfo;