import request from '@/utilities/request'

export function listTeams(query) {
  return request({
    url: '/nba/teams',
    method: 'get',
    params: query
  })
}

export function getTeamInfos(teamId, params) {
  return request({
    url: '/nba/teams/' + teamId,
    method: 'get',
    params
  })
}