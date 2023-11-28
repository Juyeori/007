import axios from "axios";

const $axios = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
});

export { $axios };
