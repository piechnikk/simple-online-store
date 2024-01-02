import {
  RouterProvider as ReactRouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import {
  ShopRoute,
  ProductRoute,
  fetchProducts,
  fetchProductById,
} from "@/features/shop";
import { fetchCart } from "@/features/cart";
import { DefaultLayout, NotFoundLayout } from "@/features/layout";
import { ROUTES } from "@/helpers";

const router = createBrowserRouter([
  {
    id: "global",
    loader: () => fetchCart(),
    element: <DefaultLayout />,
    children: [
      {
        path: ROUTES.shop,
        loader: ({ request }) =>
          fetchProducts(Object.fromEntries(new URL(request.url).searchParams)),
        element: <ShopRoute />,
      },
      {
        path: ROUTES.products(),
        loader: ({ params }) => fetchProductById(params.id),
        element: <ProductRoute />,
      },
      {
        path: "*",
        element: <NotFoundLayout />,
      },
    ],
  },
]);

const RouterProvider = () => <ReactRouterProvider router={router} />;

export default RouterProvider;
