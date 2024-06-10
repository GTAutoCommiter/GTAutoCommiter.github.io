import Link from '@docusaurus/Link';
import type { Props } from '@theme/Tag';
import clsx from 'clsx';
import styles from './styles.module.scss';

const Tag = ({
  permalink,
  label,
  count,
  className,
}: Props & { className?: string }): JSX.Element => {
  return (
    <Link
      href={permalink}
      className={clsx(styles.tag, count ? styles.tagWithCount : styles.tagRegular, className)}
    >
      {label}
      {count && <span>{count}</span>}
    </Link>
  )
}

export default Tag;