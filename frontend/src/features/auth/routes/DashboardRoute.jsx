import { FormField, Input } from "@/components";
import { API_BASE } from "@/helpers";
import { useCallback } from "react";

const DashboardRoute = () => {
  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();
    const formField = Object.fromEntries(
      new FormData(event.nativeEvent.srcElement)
    );
    formField.price = parseFloat(formField.price);
    formField.quantityInStock = parseInt(formField.quantityInStock);
    try {
      await fetch(API_BASE + "/product", {
        method: "PUT",
        body: JSON.stringify(formField),
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="py-24">
      <form onSubmit={handleSubmit}>
        <fieldset className="mx-auto max-w-2xl space-y-12">
          <div>
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Dodaj nowy produkt
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Informacje te będą wyświetlane publicznie, więc uważaj, co robisz
              udział.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <FormField
                name="productName"
                label="Nazwa"
                className="col-span-full sm:max-w-md"
              >
                <Input placeholder="Wprowadź nazwę" />
              </FormField>

              <FormField
                name="price"
                label="Cena"
                className="col-span-full sm:max-w-md"
              >
                <Input placeholder="Wprowadź cenę" />
              </FormField>

              <FormField
                name="quantityInStock"
                label="Dostępna ilość"
                className="col-span-full sm:max-w-md"
              >
                <Input placeholder="Ilość" />
              </FormField>

              <FormField
                name="imageUrl"
                label="Link do zdjęcia"
                className="col-span-full sm:max-w-md"
              >
                <Input placeholder="Link" />
              </FormField>

              <div className="col-span-full">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Opis
                </label>
                <div className="mt-2">
                  <textarea
                    id="description"
                    name="description"
                    rows={3}
                    className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Napisz kilka zdań o produkcie.
                </p>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="flex justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Dodaj produkt
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default DashboardRoute;
