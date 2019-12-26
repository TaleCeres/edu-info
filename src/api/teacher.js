import request from '@/utils/request'
import store from '../store'

export function getList () {
  const org = store.state.org
  return request({
    url: '/teacher/list',
    method: 'get',
    params: { org: org }
  })
}

export function getTeacher (id) {
  return request({
    url: '/teacher',
    method: 'get',
    params: { id }
  })
}
