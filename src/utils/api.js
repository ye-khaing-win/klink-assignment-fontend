import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;

export const fetchAll = (url, token) =>
  axios.get(url, {
    headers: {
      Authorization: token,
    },
  });
export const fetchOne = (url, id) => axios.get(`${url}/${id}`);
export const postOne = (url, body) => axios.post(url, body);
export const patchOne = (url, id, body) => axios.patch(`${url}/${id}`, body);
export const deleteOne = (url, id) => axios.delete(`${url}/${id}`);
