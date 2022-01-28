import axios from 'axios'

const api = axios.create({
  baseUrl: 'http://louis7308.iptime.org:3001',
})

export default api
