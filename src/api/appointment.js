import request from '@/utils/request'
import store from '../store'

export function addAppointment (data) {
  const org = store.state.org
  data.org = org
  return request({
    url: '/appointment',
    method: 'post',
    data
  })
}
