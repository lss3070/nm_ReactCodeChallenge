import axios from "axios";

const api = axios.create({
  baseURL: "https://api.coinpaprika.com/v1/"
});

const CommonApi = {
  getTickers: () => api.get("tickers"),
  getExchanges: () => api.get("exchanges"),
  getCoins: () => api.get("coins")
};

export default CommonApi;
