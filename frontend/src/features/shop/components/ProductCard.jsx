import { Link } from "react-router-dom";
import { ROUTES } from "@/helpers/constants";
import { useState } from "react";
import QuickView from "./QuickView";

const ProductCard = (props) => {
  const { ProductID, ProductName, Price, ImageURL } = props;

  const [isQuickViewOpened, setQuickViewOpened] = useState(false);

  return (
    <div className="group relative">
      <div className="relative">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80">
          <img
            src={ImageURL}
            alt={ProductName}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <button
          onClick={() => setQuickViewOpened(true)}
          className="absolute left-4 bottom-4 w-[calc(100%-32px)] flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 transition-opacity z-10 opacity-0 group-hover:opacity-100"
        >
          Szybki podgląd
        </button>
        <QuickView
          data={props}
          isOpened={isQuickViewOpened}
          onOpenChange={setQuickViewOpened}
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <Link to={ROUTES.products(ProductID)}>
              <span aria-hidden="true" className="absolute inset-0" />
              {ProductName}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-gray-500">Aspen White</p>
        </div>
        <p className="pl-2 text-sm font-medium text-gray-900 shrink-0">
          {Price} zł
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
