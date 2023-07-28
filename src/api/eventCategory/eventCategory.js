import request from '@/utilities/request'

export function fetchListEventCategories(query) {
  return request({
    url: '/eventCategories',
    method: 'get',
    params: query
  })
}
