import axios from 'axios';
export const api = process.env.REACT_APP_RECORDS_API_URL || "https://5e9f9b9511b078001679c96a.mockapi.io"
export const getAll = () =>
axios.get(`${api}/list`)
  // axios.get(`${api}/api/v1/records`)

export const create = (body) =>
  axios.post(`${api}/api/v1/records`,body)

export const remove = id =>
  axios.delete(`${api}/api/v1/records/${id}`);