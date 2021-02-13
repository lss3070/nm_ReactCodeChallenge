import axios from "axios";

const api = axios.create({
  baseURL: "https://yts.mx/api/v2/"
});

export const getList = (page) => {
  return api.get(`list_movies.json?page=${page}&limit=50`);
};
