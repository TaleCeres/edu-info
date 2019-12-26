import request from '@/utils/request'
import store from '../store'

export function getActivityList () {
  console.log(store)
  const org = store.state.org
  console.log('org', org)
  return request({
    url: '/activity/list',
    method: 'get',
    params: { org: org }
  })
}
export function getActivity (id) {
  return request({
    url: '/activity',
    method: 'get',
    params: { id }
  })
}
