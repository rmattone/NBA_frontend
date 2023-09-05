import request from '@/utilities/request'

export function listPlayersByTeam(query) {
  return request({
    url: '/nba/players/byteam',
    method: 'get',
    params: query
  })
}

export function getPlayer(playerId, params) {
  console.log(params);
  return request({
    url: '/nba/players/' + playerId,
    method: 'get',
    params
  })
}
