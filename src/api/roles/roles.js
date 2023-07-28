import request from '@/utilities/request'

export function fetchListRoles() {
  return request({
    url: '/roles',
    method: 'get'
  })
}
