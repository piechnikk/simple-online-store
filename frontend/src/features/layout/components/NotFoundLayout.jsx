import { Link } from "react-router-dom";
import { NotFound } from "@/features/placeholders";
import { ROUTES } from "@/helpers";

const NotFoundLayout = () => {
  return (
    <div className="grid flex-1 place-items-center bg-white px-6 lg:px-8">
      <div className="-mt-16 text-center">
        <p className="mb-4 text-base font-semibold text-indigo-600">404</p>
        <NotFound
          title="Nie znaleziono"
          excerpt="Przepraszamy, nie znaleźliśmy strony, której szukasz."
          render={
            <Link
              to={ROUTES.home}
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Wróć do strony głównej
            </Link>
          }
        />
      </div>
    </div>
  );
};

export default NotFoundLayout;
