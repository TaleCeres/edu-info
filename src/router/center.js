const _import = file => () => import(`@/views/${file}.vue`)

export default [
  {
    path: '/center',
    component: _import('center/index'),
    name: 'center'
  },
  {
    path: '/center/teacher',
    component: _import('center/teacher/index'),
    name: 'teacher'
  },
  {
    path: '/center/teacher/detail',
    component: _import('center/teacher/detail'),
    name: 'teacher'
  },
  {
    path: '/center/activity',
    component: _import('center/activity/index'),
    name: 'activity'
  },
  {
    path: '/center/activity/detail',
    component: _import('center/activity/detail'),
    name: 'activityDetail'
  },
  {
    path: '/center/article',
    component: _import('center/article/index'),
    name: 'article'
  },
  {
    path: '/center/article/detail',
    component: _import('center/article/detail'),
    name: 'articleDetail'
  },
  {
    path: '/center/photos',
    component: _import('center/photos/index'),
    name: 'photos'
  }

]
