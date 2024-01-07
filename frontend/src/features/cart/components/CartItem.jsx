import { Link } from "react-router-dom";
import { useCart } from "@/features/cart";
import { ROUTES } from "@/helpers";

const CartItem = ({
  ProductID,
  Price,
  ProductName,
  ImageURL,
  Quantity = 1,
}) => {
  const { removeFromCart } = useCart();

  return (
    <li className="flex py-6">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden border-gray-200">
        <img
          src={ImageURL}
          alt={ProductName}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div className="flex justify-between text-base font-medium text-gray-700">
          <h3>
            <Link to={ROUTES.products(ProductID)}>{ProductName}</Link>
          </h3>
          <p className="ml-4 shrink-0">{Price} zł</p>
        </div>
        <p className="mt-1 text-sm text-gray-500">Black</p>
        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="text-gray-500">Ilość: {Quantity}</p>

          <div className="flex">
            <button
              type="button"
              className="font-medium text-indigo-600 hover:text-indigo-500 disabled:opacity-80"
              onClick={() => removeFromCart({ ProductID })}
            >
              Usuń
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
