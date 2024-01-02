import { Link } from "react-router-dom";
import { ROUTES } from "@/helpers/constants";

const ProductCard = ({ ProductID, ProductName, Price, ImageURL }) => {
  return (
    <div className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img
          src={ImageURL}
          alt={ProductName}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
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
