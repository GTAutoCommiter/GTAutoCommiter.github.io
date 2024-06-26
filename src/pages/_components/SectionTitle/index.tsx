import Link from '@docusaurus/Link';
import { Icon } from '@iconify/react';
import React from 'react';
import styles from './styles.module.scss';

interface Props {
  icon?: string
  href?: string
  children: React.ReactNode
}

const SectionTitle = ({ children, icon, href }: Props) => {
  return (
    <div className={styles.sectionTitle}>
      <h2>
        {icon && <Icon icon={icon}></Icon>}
        {children}
      </h2>
      {href && (
        <Link
          href={href}
          className={styles.moreButton}
        >
          查看更多
          <Icon icon="ri:arrow-right-s-line"></Icon>
        </Link>
      )}
    </div>
  )
}

export default SectionTitle;