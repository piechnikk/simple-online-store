import { Link } from "react-router-dom";
import { ROUTES } from "@/helpers";

const MainTilesSection = () => {
  return (
    <div className="relative pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
        <div className="sm:max-w-lg">
          <h1 className="text-4xl tracking-tight text-gray-900 font-bold sm:text-6xl">
            W końcu nadeszły letnie stylizacje
          </h1>
          <p className="text-gray-500 sm:text-lg mt-6 font-medium">
            W tym roku nasza nowa letnia kolekcja ochroni Cię przed surowymi
            elementami świata, którego nie obchodzi, czy przeżyjesz, czy
            umrzesz.
          </p>
        </div>
        <div>
          <div className="mt-10">
            <div className="pointer-events-none lg:absolute lg:top-0 lg:bottom-0 lg:mx-auto lg:w-full lg:max-w-7xl">
              <div className="absolute sm:top-[60%] sm:translate-x-8 sm:-translate-y-1/2 lg:top-1/2 sm:left-1/2">
                <div className="flex items-center">
                  <div className="grid grid-cols-1 shrink-0 gap-y-6 lg:gap-y-8">
                    <div className="rounded-lg overflow-hidden w-44 h-64 sm:opacity-0 lg:opacity-100">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                        alt=""
                        className="object-cover objcer-center w-full h-full"
                      />
                    </div>
                    <div className="rounded-lg overflow-hidden w-44 h-64">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                        alt=""
                        className="object-cover objcer-center w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="mx-8 grid grid-cols-1 shrink-0 gap-y-6 lg:gap-y-8">
                    <div className="rounded-lg overflow-hidden w-44 h-64">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                        alt=""
                        className="object-cover objcer-center w-full h-full"
                      />
                    </div>
                    <div className="rounded-lg overflow-hidden w-44 h-64">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                        alt=""
                        className="object-cover objcer-center w-full h-full"
                      />
                    </div>
                    <div className="rounded-lg overflow-hidden w-44 h-64">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                        alt=""
                        className="object-cover objcer-center w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 shrink-0 gap-y-6 lg:gap-y-8">
                    <div className="rounded-lg overflow-hidden w-44 h-64">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                        alt=""
                        className="object-cover objcer-center w-full h-full"
                      />
                    </div>
                    <div className="rounded-lg overflow-hidden w-44 h-64">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                        alt=""
                        className="object-cover objcer-center w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Link
              to={ROUTES.shop}
              className="inline-block rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
            >
              Zobacz kolekcje
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainTilesSection;
