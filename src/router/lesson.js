const _import = file => () => import(`@/views/${file}.vue`)

export default [
  {
    path: '/lesson',
    component: _import('lesson/index'),
    name: 'lesson'
  },
  {
    path: '/lesson/detail',
    component: _import('introduction/family'),
    name: 'lessonDetail'
  },
  {
    path: '/lesson/content',
    component: _import('introduction/history'),
    name: 'lessonContent'
  },
  {
    path: '/lesson/video',
    component: _import('introduction/history'),
    name: 'lessonVideo'
  },
  {
    path: '/lesson/show',
    component: _import('introduction/history'),
    name: 'lessonShow'
  }
]
