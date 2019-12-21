const _import = file => () => import(`@/views/${file}.vue`)

export default [
  {
    path: '/lesson',
    component: _import('lesson/index'),
    name: 'lesson'
  },
  {
    path: '/lesson/image',
    component: _import('lesson/image'),
    name: 'lessonImage'
  },
  {
    path: '/lesson/content',
    component: _import('lesson/Content'),
    name: 'lessonContent'
  },
  {
    path: '/lesson/video',
    component: _import('lesson/lessonVideo'),
    name: 'lessonVideo'
  },
  {
    path: '/lesson/show',
    component: _import('lesson/show'),
    name: 'lessonShow'
  }
]
