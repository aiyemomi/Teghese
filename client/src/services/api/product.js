import { axiosGet } from "../../configs/axiosConfig";

const prefix = "/product";

export const getAllProducts = () => {
  return axiosGet(prefix);
};
export const getSingleProduct = (id) => {
  return axiosGet(prefix + "/" + id);
};
