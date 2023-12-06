import request from '@/utilities/request'

export function listFirstBuckets(params) {
  return request({
    url: '/nba/custom/first-buckets',
    method: 'get',
    params
  })
}
