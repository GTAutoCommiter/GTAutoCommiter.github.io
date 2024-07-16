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
        href: 'docs/category/htmlandcss',
      },
      {
        name: 'Webpack',
        desc: '',
        logo: '/img/resource/webpack.png',
        href: 'docs/category/webpack',
      },
      {
        name: 'Vite',
        desc: '',
        logo: '/img/resource/vite.svg',
        href: 'docs/category/vite',
      },
      {
        name: '前端工程化',
        desc: '',
        logo: '/img/resource/frontend.png',
        href: 'docs/category/前端工程化',
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
        href: 'docs/category/java',
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
        href: 'docs/category/nodejs',
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
        href: 'docs/cs/计算机组成原理',
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
        href: 'docs/category/操作系统',
      },
      {
        name: 'Git',
        desc: '',
        logo: '/img/resource/git.png',
        href: 'docs/category/git',
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
        logo: '/img/resource/regExp.png',
        href: 'docs/category/正则表达式',
      },
      {
        name: 'npm',
        desc: '',
        logo: '/img/resource/npm.png',
        href: 'docs/category/npm',
      },
    ]
  },
]
