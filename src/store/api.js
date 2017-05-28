import axios from 'axios'

export default {
  axios: axios,
  apis: {
    login: 'api/login',
    dm: {
      cities: 'api/cities',
      streets: 'api/streets',
      communities: 'api/communities'
    },
    zrdj: {
      list: ''
    }
  }
}
