const _import = file => () => import(`@/views/${file}.vue`)

export default [
  {
    path: '/lesson',
    component: _import('lesson/index'),
    name: 'lesson'
  },
  {
    path: '/lesson/detail',
    component: _import('lesson/detail'),
    name: 'lessonDetail'
  },
  {
    path: '/lesson/content',
    component: _import('lesson/content'),
    name: 'lessonContent'
  },
  {
    path: '/lesson/video',
    component: _import('lesson/video'),
    name: 'lessonVideo'
  },
  {
    path: '/lesson/show',
    component: _import('lesson/show'),
    name: 'lessonShow'
  }
]
