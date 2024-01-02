export const API_BASE = "http://server-simple-store.piechnik.ct8.pl";
export const API_BASE_PRODUCTS = API_BASE + "/products";

export const ROUTES = {
  home: "/",
  products: (id) => (id ? `/produkty/${id}` : "/produkty/:id"),
  shop: "/sklep",
  cart: "/koszyk",
};
