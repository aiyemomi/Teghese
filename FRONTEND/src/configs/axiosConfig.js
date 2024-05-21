import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL || "http://localhost:3001/api/v1";

export const api = axios.create({
  baseURL,
});

// api.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("authToken");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response && error.response.status === 401) {
//       window.location.href = "/login";
//     }
//     return Promise.reject(error);
//   }
// );

export function axiosGet(url, data) {
  return api.get(url, {
    params: data,
  });
}

export function axiosPost(url, data, headers) {
  return api.post(url, data ? data : {}, headers ? headers : {});
}

export const axiosPatch = (url, data) => {
  return api.patch(url, data);
}

export const axiosPut = (url, data) => {
  return api.put(url, data);
};

export const axiosDelete = (url) => {
  return api.delete(`${api.baseURL}${url}`);
};
