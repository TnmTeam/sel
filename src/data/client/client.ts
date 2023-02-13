import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://20.214.234.47:8123/api",
});

export { axiosClient };
