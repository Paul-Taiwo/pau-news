import axios from "axios";

const requestClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || "https://newsapi.org/v2/top-headlines",
  headers: {},
  timeout: 5000,
});

// Request Interceptor
// requestClient.interceptors.request.use(
//   (config) => {
//     const token = getUserToken();

//     if (token) {
//       config.headers["Authorization"] = "Bearer " + token;
//     }
//     // config.headers['Content-Type'] = 'application/json';
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// // Response Interceptor
// requestClient.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response.status === 401) {
//       logout();
//       window.location.href = "/login";
//       return true;
//     }

//     return Promise.reject(error);
//   }
// );

export default requestClient;
