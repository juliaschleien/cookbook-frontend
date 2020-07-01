import axios from 'axios'

export const http = axios.create({
  baseURL: 'https://cookbookapifinalproject.herokuapp.com'
});
