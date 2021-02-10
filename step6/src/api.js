import axios from "axios";

const api = axios.create({
  baseURL: "https://api.coinpaprika.com/v1"
});

export const getPrices = () => api.get("/tickers");
export const getExchanges = () => api.get("/exchanges");
export const getCoins = {
  list: () => api.get("/coins"),
  detail: (id) => api.get(`/coins/${id}`),
  detaillist: (id, type) => api.get(`/coins/${id}/${type}`)
};
