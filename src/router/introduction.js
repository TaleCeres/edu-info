const _import = file => () => import(`@/views/${file}.vue`)

export default [
  {
    path: '/introduction',
    component: _import('introduction/index'),
    name: 'introduction'
  },
  {
    path: '/introduction/family',
    component: _import('introduction/family'),
    name: 'introductionFamily'
  },
  {
    path: '/introduction/video',
    component: _import('introduction/introVideo'),
    name: 'introductionVideo'
  },
  {
    path: '/introduction/honor',
    component: _import('introduction/honor/index'),
    name: 'introductionHonor'
  },
  {
    path: '/introduction/honor/detail',
    component: _import('introduction/honor/detail'),
    name: 'introductionHonorDetail'
  },
  {
    path: '/introduction/history',
    component: _import('introduction/history'),
    name: 'introductionHistory'
  }
]
