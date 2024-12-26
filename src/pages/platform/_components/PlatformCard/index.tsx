import {memo} from 'react';
import clsx from 'clsx'
import Link from '@docusaurus/Link'

import styles from './styles.module.css'
import { type Platform } from '@site/data/platform'

const PlatformCard = (props) => {
  const {platform}=props;
  
  return (
    <li className={clsx(styles.friendCard, 'padding-vert--sm padding-horiz--md')}>
    <img
      src={typeof platform.avatar === 'string' ? platform.avatar : platform.avatar.src.src}
      alt={platform.title}
      className={clsx(styles.friendCardImage)}
    />
    <div className="card__body">
      <div className={clsx(styles.friendCardHeader)}>
        <h4 className={styles.friendCardTitle}>
          <Link to={platform.website} className={styles.friendCardLink} rel="">
            {platform.title}
          </Link>
        </h4>
      </div>
      <p className={styles.friendCardDesc}>{platform.description}</p>
    </div>
  </li>
  );
}
 
export default memo(PlatformCard);