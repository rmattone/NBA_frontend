import request from '@/utilities/request'

export function fetchListDepartments(query) {
  return request({
    url: '/departments',
    method: 'get',
    params: query
  })
}
