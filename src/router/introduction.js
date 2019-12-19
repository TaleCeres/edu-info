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
    path: '/introduction/history',
    component: _import('introduction/history'),
    name: 'introductionHistory'
  }
]
