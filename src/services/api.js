import axios from "axios";
import store from "../store/index";

const baseAPI = axios.create({
  baseURL: process.env.REACT_APP_API_URL + "/api/v1",
});

baseAPI.interceptors.request.use(
  function handleRequest(config) {
    const {
      auth: { address, signature },
    } = store.getState();

    if (address) {
      config.headers["x-address"] = address;
    }

    if (signature) {
      config.headers["x-signature"] = signature;
    }

    return config;
  },

  function handleError(error) {
    return Promise.reject(error);
  }
);
baseAPI.defaults.headers.common["Content-Type"] = "application/json";

export default baseAPI;
