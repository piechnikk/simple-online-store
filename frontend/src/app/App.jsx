import RouterProvider from "@/app/RouterProvider";
import { CartProvider } from "@/features/cart";
import { AuthProvider } from "@/features/auth";

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <RouterProvider />
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
