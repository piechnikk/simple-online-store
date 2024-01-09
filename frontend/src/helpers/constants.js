export const API_BASE = `${
  import.meta.env.PROD ? "https" : "http"
}://server-simple-store.piechnik.ct8.pl`;
export const API_BASE_PRODUCTS = API_BASE + "/products";

export const ROUTES = {
  home: "/",
  products: (id) => (id ? `/produkty/${id}` : "/produkty/:id"),
  shop: "/sklep",
  checkout: "/zamowienie",
  dashboard: "/panel",
  register: "/zarejestruj-sie",
  signIn: "/zaloguj-sie",
};
