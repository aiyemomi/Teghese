import { axiosPost } from "../../configs/axiosConfig";

const prefix = "/auth";

export const signUp = (data) => {
  return axiosPost(prefix + "/register", data);
};
export const login = (data) => {
  return axiosPost(prefix + "/login", data);
};
export const logout = () => {
  return axiosPost(prefix + "/logout");
};
