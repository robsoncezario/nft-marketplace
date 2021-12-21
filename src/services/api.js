import axios from "axios";

const baseAPI = axios.create({
  baseURL: process.env.REACT_APP_API_URL + "/api/v1",
});

export default baseAPI;
