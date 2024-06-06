import { Icon } from '@iconify/react';
import social from '@site/data/social';
import Tooltip from '@site/src/components/Tooltip';
import styles from './styles.module.scss';

interface Props {
  href: string
  title: string
  color?: string
  icon: string | JSX.Element
  [key: string]: unknown
}

const SocialLink = ({ href, icon, title, color, ...prop }: Props) => {
  return (
    <Tooltip key={title} text={title} anchorEl="#__docusaurus" id={`tooltip-${title}`}>
      <a href={href} target="_blank" {...prop} title={title}>
        {typeof icon === 'string' ? <Icon icon={icon} /> : icon}
      </a>
    </Tooltip>
  )
}

const SocialLinks = (prop) => {
  return (
    <div className={styles.socialLinks} {...prop}>
      {Object.entries(social)
        .filter(([_key, { href }]) => href)
        .map(([key, { href, icon, title, color }]) => {
          return (
            <SocialLink
              key={key}
              href={href!}
              title={title}
              icon={icon}
              style={{ '--color': color }}
            ></SocialLink>
          )
        })}
    </div>
  )
}

export default SocialLinks;