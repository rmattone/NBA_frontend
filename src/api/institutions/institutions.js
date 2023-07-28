import request from '@/utilities/request'

export function fetchListInstitutions(query) {
  return request({
    url: '/institutions',
    method: 'get',
    params: query
  })
}
