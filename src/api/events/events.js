import request from '@/utilities/request'

export function updateEvent(data, eventId) {
  return request({
    url: '/events/' + eventId,
    method: 'put',
    data
  })
}

export function createEvents(data) {
  return request({
    url: '/events',
    method: 'post',
    data
  })
}
