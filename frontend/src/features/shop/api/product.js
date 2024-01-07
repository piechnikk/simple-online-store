import { API_BASE_PRODUCTS } from "@/helpers/constants";

export const fetchProductById = async (id) => {
  const response = await fetch(API_BASE_PRODUCTS);
  if (!response.ok) throw new Error(response.statusText);

  const result = await response.json();

  return result.items.find(({ ProductID }) => ProductID === parseInt(id));
};
