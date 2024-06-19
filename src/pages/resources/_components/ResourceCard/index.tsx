import Link from '@docusaurus/Link';
import { type Resource } from '@site/data/resources';
import Tooltip from '@site/src/components/Tooltip';
import clsx from 'clsx';
import { memo } from 'react';
import styles from './styles.module.css';

const ResourceCard = ({ resource }: { resource: Resource }) => {

  return (
    <li
      key={resource.name}
      className={clsx(styles.resourceCard, 'padding-vert--sm padding-horiz--md')}
    >
      <img
        src={
          typeof resource.logo === 'string' ? resource.logo : (resource.logo as { src: { src: string } })?.src?.src
        }
        alt={resource.name}
        className={clsx(styles.resourceCardImage)}
      />
      <div className={styles.resourceCardBody}>
        <div className={clsx(styles.resourceCardHeader)}>
          <h4 className={styles.resourceCardTitle}>
            <Link
              href={resource.href}
              className={styles.resourceCardLink}
            >
              {resource.name}
            </Link>
          </h4>
        </div>
        <Tooltip
          key={resource.name}
          text={resource.desc}
          anchorEl="#__docusaurus"
          id={`tooltip-${resource.name}`}
        >
          <p className={styles.resourceCardDesc}>{resource.desc}</p>
        </Tooltip>
      </div>
    </li>
  )
}

export default memo(ResourceCard);