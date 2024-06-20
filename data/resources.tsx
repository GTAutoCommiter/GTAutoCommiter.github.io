export interface Resource {
  name: string
  logo: string
  desc: string
  href: string
  tags?: string[]
}

export interface ResourceCategory {
  name: string
  resources: Resource[]
}

export const resourceData: ResourceCategory[] = [
  {
    name: '前端',
    resources: [
      {
        name: 'JavaScript',
        desc: '',
        logo: '/img/resource/javascript.svg',
        href: 'docs/category/javascript',
      },
      {
        name: 'TypeScript',
        desc: '',
        logo: '/img/resource/typescript.png',
        href: 'docs/category/typescript',
      },
      {
        name: 'React',
        desc: '',
        logo: 'https://react.dev/favicon.ico',
        href: 'docs/category/react',
      },
      {
        name: 'Vue',
        desc: '',
        logo: 'https://vuejs.org/logo.svg',
        href: 'docs/category/vue',
      },
      {
        name: 'Html&Css',
        desc: '',
        logo: '/img/resource/htmlCss.png',
        href: '',
      },
      {
        name: 'Webpack',
        desc: '',
        logo: '/img/resource/webpack.png',
        href: '',
      },
      {
        name: 'Vite',
        desc: '',
        logo: '/img/resource/vite.svg',
        href: '',
      },
      {
        name: '前端工程化',
        desc: '',
        logo: '/img/resource/frontend.png',
        href: '',
      },
    ]
  },
  {
    name: '后端',
    resources: [
      {
        name: 'Java',
        desc: '',
        logo: '/img/resource/java.png',
        href: '',
      },
      {
        name: 'C',
        desc: '',
        logo: '/img/resource/c.png',
        href: '',
      },
      {
        name: 'SpringBoot',
        desc: '',
        logo: '/img/resource/springboot.png',
        href: '',
      },
      {
        name: 'node.js',
        desc: '',
        logo: '/img/resource/nodejs.svg',
        href: '',
      },
      {
        name: 'mySQL',
        desc: '',
        logo: '/img/resource/mySQL.png',
        href: '',
      },
    ]
  },
  {
    name: '开发通用技能',
    resources: [
      {
        name: '计算机组成原理',
        desc: '',
        logo: '/img/resource/cs.png',
        href: '',
      },
      {
        name: '计算机网络',
        desc: '',
        logo: '/img/resource/net.jpeg',
        href: 'docs/category/计算机网络',
      },
      {
        name: '数据结构与算法',
        desc: '',
        logo: '/img/resource/algorithm.png',
        href: '',
      },
      {
        name: '操作系统',
        desc: '',
        logo: '/img/resource/os.png',
        href: '',
      },
      {
        name: 'Git',
        desc: '',
        logo: '/img/resource/git.png',
        href: '',
      },
      {
        name: 'Vim',
        desc: '',
        logo: '/img/resource/vim.png',
        href: '',
      },
      {
        name: '编译器',
        desc: '',
        logo: '/img/resource/javascript.svg',
        href: '',
      },
      {
        name: '正则表达式',
        desc: '',
        logo: '/img/resource/javascript.svg',
        href: '',
      },
      {
        name: 'npm',
        desc: '',
        logo: '/img/resource/npm.png',
        href: '',
      },
    ]
  }
]
