import { http } from './api'

export default {

  findAll:() => {
    return http.get('information');
  },

  findById:(informations) => {
    return http.get(`information/${informations.id}`, {data: informations});
  },

  save:(informations) => {
    return http.post('information', informations);
  },

  delete:(informations) => {
    return http.delete(`information/${informations.id}`, {data: informations});
  },

  update:(informations) => {
    return http.put(`information`, informations);
  }
}
