import request from '@/utils/request'
import store from '../store'

export function getList () {
  const org = store.state.org
  return request({
    url: '/lesson/list',
    method: 'get',
    params: { org: org }
  })
}
export function addLesson (data) {
  const org = store.state.org
  data.org = org
  return request({
    url: '/lesson',
    method: 'post',
    data
  })
}

export function delLesson (id) {
  return request({
    url: '/lesson',
    method: 'DELETE',
    params: { id }
  })
}
export function getLesson (id) {
  return request({
    url: '/lesson',
    method: 'get',
    params: { id }
  })
}
export function editLesson (data) {
  return request({
    url: '/lesson',
    method: 'PUT',
    params: { id: data._id },
    data
  })
}
