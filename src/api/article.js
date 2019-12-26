import request from '@/utils/request'
import store from '../store'

export function getList () {
  const org = store.state.org
  return request({
    url: '/article/list',
    method: 'get',
    params: { org: org }
  })
}
export function getArticle (id) {
  return request({
    url: '/article',
    method: 'get',
    params: { id }
  })
}
