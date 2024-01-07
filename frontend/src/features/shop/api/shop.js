import { API_BASE_PRODUCTS } from "@/helpers/constants";

export const fetchProducts = (params) => {
  const queryString = new URLSearchParams({
    ...params,
    perPage: 10,
  }).toString();

  return fetch(API_BASE_PRODUCTS + `${queryString ? `?${queryString}` : ""}`);
};
