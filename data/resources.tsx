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
        logo: '/img/resource/javascript.svg',
        href: '',
      },
      {
        name: 'React',
        desc: '',
        logo: '/img/resource/javascript.svg',
        href: '',
      },
      {
        name: 'Vue',
        desc: '',
        logo: '/img/resource/javascript.svg',
        href: '',
      },
      
    ]
  },
  {
    name: '后端',
    resources: [
      {
        name: 'JavaScript',
        desc: '',
        logo: '/img/resource/javascript.svg',
        href: '',
      },
      {
        name: 'TypeScript',
        desc: '',
        logo: '/img/resource/javascript.svg',
        href: '',
      },
      {
        name: 'React',
        desc: '',
        logo: '/img/resource/javascript.svg',
        href: '',
      },
      {
        name: 'Vue',
        desc: '',
        logo: '/img/resource/javascript.svg',
        href: '',
      },
      
    ]
  },
  {
    name: 'CS',
    resources: [
      {
        name: '',
        desc: '',
        logo: '/img/resource/javascript.svg',
        href: '',
      },
      {
        name: 'TypeScript',
        desc: '',
        logo: '/img/resource/javascript.svg',
        href: '',
      },
      {
        name: 'React',
        desc: '',
        logo: '/img/resource/javascript.svg',
        href: '',
      },
      {
        name: 'Vue',
        desc: '',
        logo: '/img/resource/javascript.svg',
        href: '',
      },
      
    ]
  }
]
