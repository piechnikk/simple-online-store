import { ROUTES } from "@/helpers";
import { Link } from "react-router-dom";

const CategoriesSections = () => {
  return (
    <section className="bg-gray-50">
      <div className="py-24 px-4 max-w-7xl mx-auto sm:px-6 sm:py-32 lg:px-8">
        <div className="sm:justify-between sm:items-baseline sm:flex">
          <h2 className="text-gray-900 tracking-tight font-bold text-2xl">
            Kupuj według kategorii
          </h2>
          <Link
            to={ROUTES.shop}
            className="hidden font-semibold text-sm text-indigo-600 sm:block"
          >
            Przeglądaj wszystkie kategorie<span aria-hidden="true"> →</span>
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-rows-2 sm:grid-cols-2 sm:gap-x-6 lg:gap-8">
          <div className="rounded-lg aspect-w-2 overflow-hidden aspect-h-1 sm:aspect-w-1 sm:row-span-2">
            <img
              src="https://tailwindui.com/img/ecommerce-images/home-page-03-featured-category.jpg"
              alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
              className="object-center object-cover"
            />
            <div className="p-6 flex items-end">
              <div>
                <h3 className="font-semibold text-white">
                  <Link to={ROUTES.shop}>
                    <span className="inset-0 absolute"></span>Nowości
                  </Link>
                </h3>
                <p
                  aria-hidden="true"
                  className="text-white text-sm mt-1 font-medium"
                >
                  Kupuj teraz
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden aspect-h-1 aspect-w-2">
            <img
              src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg"
              alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
              className="object-center object-cover"
            />
            <div className="p-6 flex items-end">
              <div>
                <h3 className="font-semibold text-white">
                  <Link to={ROUTES.shop}>
                    <span className="inset-0 absolute"></span>Nowości
                  </Link>
                </h3>
                <p
                  aria-hidden="true"
                  className="text-white text-sm mt-1 font-medium"
                >
                  Kupuj teraz
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden aspect-h-1 aspect-w-2">
            <img
              src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-02.jpg"
              alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
              className="object-center object-cover"
            />
            <div className="p-6 flex items-end">
              <div>
                <h3 className="font-semibold text-white">
                  <Link to={ROUTES.shop}>
                    <span className="inset-0 absolute"></span>Nowości
                  </Link>
                </h3>
                <p
                  aria-hidden="true"
                  className="text-white text-sm mt-1 font-medium"
                >
                  Kupuj teraz
                </p>
              </div>
            </div>
          </div>
        </div>
        <Link
          to={ROUTES.shop}
          className="block mt-6 font-semibold text-sm text-indigo-600 sm:hidden"
        >
          Przeglądaj wszystkie kategorie<span aria-hidden="true"> →</span>
        </Link>
      </div>
    </section>
  );
};

export default CategoriesSections;
