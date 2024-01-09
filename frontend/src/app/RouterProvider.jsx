import {
  RouterProvider as ReactRouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import {
  ShopRoute,
  ProductRoute,
  fetchProducts,
  fetchProductById,
} from "@/features/shop";
import { HomeRoute } from "@/features/home";
import { SignInRoute, RegisterRoute, DashboardRoute } from "@/features/auth";
import { DefaultLayout, NotFoundLayout } from "@/features/layout";
import { createOrder, CheckoutRoute } from "@/features/checkout";
import { ROUTES } from "@/helpers";

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: ROUTES.home,
        element: <HomeRoute />,
      },
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
        path: ROUTES.checkout,
        action: async ({ request }) => {
          const formData = await request.formData();
          const body = JSON.parse(Object.fromEntries(formData).data);
          await createOrder(body);

          return redirect(ROUTES.home);
        },
        element: <CheckoutRoute />,
      },
      {
        path: ROUTES.dashboard,
        // loader: ({ params }) => fetchProductById(params.id),
        element: <DashboardRoute />,
      },
      {
        path: "*",
        element: <NotFoundLayout />,
      },
    ],
  },
  {
    path: ROUTES.register,
    element: <RegisterRoute />,
  },
  {
    path: ROUTES.signIn,
    element: <SignInRoute />,
  },
]);

const RouterProvider = () => <ReactRouterProvider router={router} />;

export default RouterProvider;
