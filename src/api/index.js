import axios from "axios";

const instance = axios.create({
  baseURL: "http://landapi.vveco.vn/",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
  // withCredentials: true,
});

instance.interceptors.request.use(
  function (config) {
    const token = `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzMyIsImlhdCI6MTYxOTQyNjI3OSwiZXhwIjoxNjIwMDMxMDc5fQ.T-f4S-z44ZzFtLmZnSn0Grj2eIC15a4yOoiEDn17y-fbuReUtwLbDjKSpWXYHy3arFBKwotDo3aYMgKlxtb-3w`;
    config.headers.Authorization = token;
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default instance;
