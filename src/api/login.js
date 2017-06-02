import fetch from '../utils/fetch'

function login (user) {
  return fetch({
    url: 'api/user/getInfo',
    method: 'post',
    params: user
  })
}

export {login}
