const _import = file => () => import(`@/views/${file}.vue`)

export default [
  {
    path: '/about',
    component: _import('about/index'),
    name: 'about'
  },
  {
    path: '/about/appointment',
    component: _import('about/appointment'),
    name: 'appointment'
  },
  {
    path: '/about/business',
    component: _import('about/business'),
    name: 'business'
  },
  {
    path: '/about/advertises',
    component: _import('about/advertises'),
    name: 'advertises'
  },
  {
    path: '/about/join',
    component: _import('about/join'),
    name: 'join'
  },
  {
    path: '/about/detail',
    component: _import('about/detail'),
    name: 'detail'
  }

]
