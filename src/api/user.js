import request from '@/utilities/request'

export function login(data) {
  return request({
    url: '/auth/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/user',
    method: 'get',
    headers: {
      Authorization: 'Bearer ' + token
    }
  })
}

export function logout(token) {
  return request({
    url: '/auth/logout',
    method: 'post',
    headers: {
      Authorization: 'Bearer ' + token
    }
  })
}

export function listUsers() {
  return request({
    url: '/users',
    method: 'get'
  })
}

export function getUser(data) {
  return request({
    url: '/users/' + data.userId,
    method: 'get'
  })
}

export function updateUser(data, userId) {
  return request({
    url: '/users/' + userId,
    method: 'put',
    data
  })
}

export function createUser(data) {
  console.log(data)
  return request({
    url: '/users',
    method: 'post',
    data
  })
}
