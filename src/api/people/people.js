import request from '@/utilities/request'

export function fetchListPeople(query = null) {
  return request({
    url: '/people',
    method: 'get',
    params: query
  })
}

export function updatePerson(data, personId) {
  return request({
    url: '/people/' + personId,
    method: 'put',
    data
  })
}
