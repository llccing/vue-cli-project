import axios from 'axios'

export const GET_USERS = 'GET_USERS'

export default {
  [GET_USERS] () {
    axios.get('/api/users').then(response => {
      alert(response)
    })
  }
}
