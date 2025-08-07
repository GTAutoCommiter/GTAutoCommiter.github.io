export type Social = {
  github?: string
  twitter?: string
  juejin?: string
  qq?: string
  wx?: string
  cloudmusic?: string
  zhihu?: string
  email?: string
  discord?: string
}

type SocialValue = {
  href?: string
  title: string
  icon: string
  color: string
}

const social: Social = {
  github: 'https://github.com/GTAutoCommiter',
  juejin: 'https://juejin.cn/user/2656897734017608/posts',
  // email: 'lao-jiawei@qq.com',
  csdn: 'https://blog.csdn.net/weixin_45944495?spm=1001.2101.3001.5343',
  leetcode:'https://leetcode.cn/u/lao-jiawei/',
  cnblog: 'https://www.cnblogs.com/lao-jiaweijarvee',
}

const socialSet: Record<keyof Social | 'rss', SocialValue> = {
  github: {
    href: social.github,
    title: 'GitHub',
    icon: 'ri:github-line',
    color: '#010409',
  },
  juejin: {
    href: social.juejin,
    title: '掘金',
    icon: 'simple-icons:juejin',
    color: '#1E81FF',
  },
  csdn: {
    href: social.csdn,
    title: 'CSDN',
    icon: 'simple-icons:csdn',
    color: '#e96140',
  },
  leetcode: {
    href: social.leetcode,
    title: '力扣',
    icon: 'simple-icons:leetcode',
    color: '#f0a641',
  },
  cnblog: {
    href: social.cnblog,
    title: '博客园',
    icon: 'material-symbols:wifi',
    color: '#1da1f2',
  },
  wx: {
    href: social.wx,
    title: '微信',
    icon: 'ri:wechat-2-line',
    color: '#07c160',
  },
  zhihu: {
    href: social.zhihu,
    title: '知乎',
    icon: 'ri:zhihu-line',
    color: '#1772F6',
  },
  email: {
    href: social.email,
    title: '邮箱',
    icon: 'ri:mail-line',
    color: '#D44638',
  },
  cloudmusic: {
    href: social.cloudmusic,
    title: '网易云',
    icon: 'ri:netease-cloud-music-line',
    color: '#C20C0C',
  },
  rss: {
    // href: '/blog/rss.xml',
    href: null,
    title: 'RSS',
    icon: 'ri:rss-line',
    color: '#FFA501',
  },
}

export default socialSet
