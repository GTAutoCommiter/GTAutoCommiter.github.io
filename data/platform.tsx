export const Platforms: Platform[] = [
  {
    title: '掘金',
    description: '',
    website: 'https://juejin.cn/user/2656897734017608/posts',
    avatar: 'https://lf-web-assets.juejin.cn/obj/juejin-web/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg',
  },
  {
    title: '博客园',
    description: '',
    website: 'https://www.cnblogs.com/lao-jiaweijarvee',
    avatar: 'https://files.codelife.cc/website/59fc70b4f31e116534ffcc98.png?x-oss-process=image/resize,limit_0,m_fill,w_100,h_100/quality,q_92/format,webp',
  },
  {
    title: 'CSDN',
    description: '',
    website: 'https://blog.csdn.net/weixin_45944495?spm=1001.2101.3001.5343',
    avatar: 'https://files.codelife.cc/icons/60e85ce85ca0b218.png?x-oss-process=image/resize,limit_0,m_fill,w_100,h_100/quality,q_92/format,webp',
  },
]

export type Platform = {
  title: string
  description: string
  website: string
  avatar?: string
}
