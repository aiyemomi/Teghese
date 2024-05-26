import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL || "http://localhost:3001/api/v1";

export const api = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log(error);
    if (error.response && error.response.status === 401) {
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export function axiosGet(url, data) {
  return api.get(url, {
    params: data,
  });
}

export async function axiosPost(url, data, headers) {
  const response = await api.post(
    url,
    data ? data : {},
    headers ? headers : {}
  );
  return response;
}

export const axiosPatch = (url, data) => {
  return api.patch(url, data);
};

export const axiosPut = (url, data) => {
  return api.put(url, data);
};

export const axiosDelete = (url) => {
  return api.delete(`${api.baseURL}${url}`);
};
