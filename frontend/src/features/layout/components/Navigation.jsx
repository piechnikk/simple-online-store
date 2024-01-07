import { Fragment, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { CartDialog, useCart } from "@/features/cart";
import { useAuth } from "@/features/auth";
import { ROUTES } from "@/helpers";

const Navigation = () => {
  const { count } = useCart();
  const { user, logout } = useAuth();

  const [open, setOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const { key } = useLocation();

  useEffect(() => {
    setCartOpen(false);
    setOpen(false);
  }, [key]);

  return (
    <div className="bg-white">
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 py-5">
                  <button
                    type="button"
                    className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <div className="flow-root">
                    <Link
                      to={ROUTES.home}
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      Strona główna
                    </Link>
                  </div>
                  <div className="flow-root">
                    <Link
                      to={ROUTES.shop}
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      Sklep
                    </Link>
                  </div>
                </div>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  {user ? (
                    <div className="flow-root">
                      <button
                        className="-m-2 block p-2 font-medium text-gray-900"
                        onClick={logout}
                      >
                        Wyloguj się
                      </button>
                    </div>
                  ) : (
                    <>
                      <div className="flow-root">
                        <Link
                          to={ROUTES.signIn}
                          className="-m-2 block p-2 font-medium text-gray-900"
                        >
                          Zaloguj się
                        </Link>
                      </div>
                      <div className="flow-root">
                        <Link
                          to={ROUTES.register}
                          className="-m-2 block p-2 font-medium text-gray-900"
                        >
                          Utwórz konto
                        </Link>
                      </div>
                    </>
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link to="/">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt=""
                  />
                </Link>
              </div>

              <div className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  <Link
                    to={ROUTES.home}
                    className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    Strona główna
                  </Link>
                  <Link
                    to={ROUTES.shop}
                    className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    Sklep
                  </Link>
                </div>
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {user ? (
                    <button
                      onClick={logout}
                      className="text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      Wyloguj się
                    </button>
                  ) : (
                    <>
                      <Link
                        to={ROUTES.signIn}
                        className="text-sm font-medium text-gray-700 hover:text-gray-800"
                      >
                        Zaloguj się
                      </Link>
                      <span
                        className="h-6 w-px bg-gray-200"
                        aria-hidden="true"
                      />
                      <Link
                        to={ROUTES.register}
                        className="text-sm font-medium text-gray-700 hover:text-gray-800"
                      >
                        Utwórz konto
                      </Link>
                    </>
                  )}
                </div>

                <div className="flex lg:ml-6">
                  <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                  </a>
                </div>

                <div className="ml-4 flow-root lg:ml-6">
                  <button
                    type="button"
                    className="group -m-2 flex items-center p-2"
                    onClick={() => setCartOpen(true)}
                  >
                    <ShoppingBagIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    {count !== 0 && (
                      <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                        {count}
                      </span>
                    )}
                    <span className="sr-only">items in cart, view bag</span>
                  </button>
                  <CartDialog isOpened={cartOpen} onOpenChange={setCartOpen} />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navigation;
