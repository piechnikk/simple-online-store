import { useLoaderData, useSearchParams } from "react-router-dom";
import { Breadcrumbs } from "@/components";
import { ProductCard, Pagination } from "@/features/shop/components";
import { NotFound } from "@/features/placeholders";
import { ROUTES } from "@/helpers";
import { usePage } from "@/hooks";

export default function ShopRoute() {
  const { items, totalCount } = useLoaderData();
  const [searchParams] = useSearchParams();

  const pageFromParams = parseInt(searchParams.get("page"));
  const page = isNaN(pageFromParams) ? 1 : pageFromParams;

  usePage({ title: `Sklep | Strona ${page}` });

  return (
    <div className="mx-auto w-full max-w-2xl px-4 pt-4 sm:px-6 sm:pt-6 lg:max-w-7xl">
      <Breadcrumbs items={[{ name: "Sklep", to: ROUTES.shop }]} />
      <h2 className="mt-2 sm:mt-4 text-4xl font-semibold tracking-tight text-gray-900">
        Wszystkie produkty
      </h2>
      {items.length === 0 ? (
        <NotFound
          small
          title="Nie znaleziono"
          excerpt="Przepraszamy, nie znaleźliśmy produktów, których szukasz."
          className="mt-24"
        />
      ) : (
        <>
          <div className="py-6 sm:py-8 lg:py-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {items.map((product) => (
              <ProductCard key={product.ProductID} {...product} />
            ))}
          </div>
          <Pagination
            page={page}
            results={items.length}
            totalResults={totalCount}
            totalPages={Math.ceil(totalCount / 10)}
          />
        </>
      )}
    </div>
  );
}
