import request from '@/utils/request'
import store from '../store'

export function getList () {
  const org = store.state.org
  return request({
    url: '/vip/list',
    method: 'get',
    params: { org: org }
  })
}
