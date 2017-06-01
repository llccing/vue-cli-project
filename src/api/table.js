import fetch from '../utils/fetch'

export function fetchList (query) {
  return fetch({
    url: 'api/table/list',
    method: 'get',
    params: query
  })
}

export function fetchPv (pv) {
  return fetch({
    url: 'api/table/pv',
    method: 'get',
    params: {pv}
  })
}
