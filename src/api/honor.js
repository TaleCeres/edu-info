import request from '@/utils/request'
import store from '../store'

export function getList () {
  const org = store.state.org
  return request({
    url: '/honor/list',
    method: 'get',
    params: { org: org }
  })
}
export function getHonor (id) {
  return request({
    url: '/honor',
    method: 'get',
    params: { id }
  })
}
