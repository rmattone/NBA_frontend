import request from '@/utilities/request'

export function fetchListSchedules(query) {
  return request({
    url: '/schedules',
    method: 'get',
    params: query
  })
}

export function getSchedule(scheduleId) {
  return request({
    url: '/schedules/' + scheduleId,
    method: 'get'
  })
}

export function createSchedule(data) {
  return request({
    url: '/schedules/',
    method: 'post',
    data
  })
}

export function updateSchedule(data, scheduleId) {
  return request({
    url: '/schedules/' + scheduleId,
    method: 'put',
    data
  })
}

export function deleteSchedule(data) {
  return request({
    url: '/schedules/' + data.scheduleId,
    method: 'delete'
  })
}

export function listScheduleEvents(data) {
  return request({
    url: '/schedules/' + data.scheduleId + '/events',
    method: 'get'
  })
}

export function createEvents(data, scheduleId) {
  return request({
    url: '/schedules/' + scheduleId + '/createEvents',
    method: 'post',
    data
  })
}
