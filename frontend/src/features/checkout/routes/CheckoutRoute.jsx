import { Link, useNavigation, useSubmit } from "react-router-dom";
import { Breadcrumbs, FormField, Input } from "@/components";
import { useCart } from "@/features/cart";
import { NotFound } from "@/features/placeholders";
import { ROUTES } from "@/helpers";
import { useCallback } from "react";

const CheckoutRoute = () => {
  const { items, isEmpty, total } = useCart();
  const navigation = useNavigation();
  const submit = useSubmit();

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();

      submit(
        {
          data: JSON.stringify({
            products: items.map(({ ProductID, Quantity }) => ({
              id: ProductID,
              quantity: Quantity,
            })),
          }),
        },
        {
          method: "post",
          action: ROUTES.checkout,
        }
      );
    },
    [items, submit]
  );

  const isSubmitting = navigation.state === "submitting";

  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-4 sm:px-6 sm:py-6 lg:max-w-7xl">
      <Breadcrumbs
        items={[
          { name: "Sklep", to: ROUTES.shop },
          { name: "Zamówienie", to: ROUTES.checkout },
        ]}
      />
      <h2 className="mt-2.5 sm:mt-4 text-4xl font-semibold tracking-tight text-gray-900">
        Zamówienie
      </h2>
      {isEmpty ? (
        <NotFound
          small
          title="Pusty koszyk"
          excerpt="Przepraszamy, ale twój koszyk jest pusty."
          className="mt-24"
        />
      ) : (
        <form onSubmit={handleSubmit}>
          <fieldset
            disabled={isSubmitting}
            className="mt-6 flex flex-col lg:flex-row gap-y-10 gap-x-16"
          >
            <div className="flex-1">
              <h2 className="text-lg font-medium">Informacje</h2>
              <div className="mt-6 flex flex-col gap-6 xs:flex-row">
                <FormField name="name" label="Imię" className="flex-1">
                  <Input required />
                </FormField>
                <FormField name="surname" label="Nazwisko" className="flex-1">
                  <Input required />
                </FormField>
              </div>
              <div className="mt-6 flex flex-col gap-6 xs:flex-row">
                <FormField
                  name="address1"
                  label="Ulica i numer"
                  className="flex-1"
                >
                  <Input required />
                </FormField>
                <FormField
                  name="address2"
                  label="Numer mieszkania/lokalu"
                  className="flex-1"
                >
                  <Input />
                </FormField>
              </div>
              <div className="mt-6 flex flex-col gap-6 xs:flex-row">
                <FormField
                  name="postcode"
                  label="Kod pocztowy"
                  className="flex-1"
                >
                  <Input required />
                </FormField>
                <FormField name="city" label="Miasto" className="flex-1">
                  <Input required />
                </FormField>
              </div>
              <div className="mt-6 flex flex-col gap-6 xs:flex-row">
                <FormField name="email" label="Adres e-mail" className="flex-1">
                  <Input required />
                </FormField>
                <FormField
                  name="phone"
                  label="Numer telefonu"
                  className="flex-1"
                >
                  <Input required />
                </FormField>
              </div>
            </div>
            <div className="lg:basis-[360px] xl:basis-[400px]">
              <h2 className="mb-6 text-lg font-medium">Podsumowanie</h2>
              <ul className="-my-6">
                {items.map(
                  ({ ProductID, ProductName, Price, ImageURL, Quantity }) => (
                    <li
                      key={ProductID}
                      className="flex py-6 first:border-none border-t"
                    >
                      <img
                        src={ImageURL}
                        alt=""
                        className="object-center object-cover rounded-md flex-none w-24 h-24"
                      />
                      <div className="ml-6 flex-auto">
                        <div className="sm:flex sm:justify-between sm:items-start">
                          <div className="font-medium text-sm flex-auto">
                            <Link to={ROUTES.products(ProductID)}>
                              <h3 className="text-gray-900">{ProductName}</h3>
                            </Link>
                            <p className="text-gray-900 mt-1">
                              {(Price * Quantity).toFixed(2)} zł
                            </p>
                            <p className="hidden text-gray-500 mt-1 sm:block">
                              Ilość: {Quantity}
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                  )
                )}
              </ul>
              <div className="border-t font-medium text-base text-gray-900 mt-6 pt-6 flex flex-col gap-y-6">
                <div className="flex justify-between">
                  <p>Całość</p>
                  <p>{total} zł</p>
                </div>
              </div>
              <button
                type="submit"
                className="mt-6 flex w-full justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-75"
              >
                Zapłać
              </button>
            </div>
          </fieldset>
        </form>
      )}
    </div>
  );
};

export default CheckoutRoute;
