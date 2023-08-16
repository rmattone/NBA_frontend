import request from '@/utilities/request'

export function fetchListPeople(query = null) {
  return request({
    url: '/people',
    method: 'get',
    params: query
  })
}

export function getPerson(personId) {
  return request({
    url: '/people/' + personId,
    method: 'get'
  })
}

export function updatePerson(data, personId) {
  return request({
    url: '/people/' + personId,
    method: 'post',
    data
  })
}

export function createPerson(data) {
  return request({
    url: '/people/',
    method: 'post',
    data
  })
}
