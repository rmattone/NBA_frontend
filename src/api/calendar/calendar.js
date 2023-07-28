import request from '@/utilities/request'

export function fetchListEvents(params) {
  return request({
    url: '/calendar/events',
    method: 'get',
    params
  })
}

export function joinEvent(eventHasPersonId) {
  return request({
    url: 'calendar/spot/' + eventHasPersonId,
    method: 'put'
  })
}

export function exitEvent(eventHasPersonId) {
  return request({
    url: 'calendar/spot/' + eventHasPersonId + '/exit',
    method: 'put'
  })
}
