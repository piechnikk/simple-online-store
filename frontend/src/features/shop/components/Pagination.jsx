import { Link, useMatches, useSearchParams } from "react-router-dom";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { useCallback } from "react";

const Pagination = ({ totalResults = 0, totalPages = 1 }) => {
  totalPages = Math.max(1, parseInt(totalPages));
  totalPages = isNaN(totalPages) ? 1 : totalPages;

  const [searchParams] = useSearchParams();
  const { pathname } = useMatches();

  const currentPage = isNaN(parseInt(searchParams.get("page")))
    ? 1
    : parseInt(searchParams.get("page"));

  const getNavigateTo = useCallback(
    (page) => {
      const pageTo = page > 0 && page <= totalPages ? page : currentPage;
      return { pathname, search: `page=${pageTo}` };
    },
    [currentPage, pathname, totalPages]
  );

  const isActive = useCallback((page) => currentPage === page, [currentPage]);

  return (
    totalResults !== 0 &&
    totalPages > 1 && (
      <div className="flex items-center justify-between border-t border-gray-200 bg-white py-3">
        <div className="flex flex-1 justify-between sm:hidden">
          <Link
            to={getNavigateTo(currentPage - 1)}
            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Poprzednia
          </Link>
          <Link
            to={getNavigateTo(currentPage + 1)}
            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Następna
          </Link>
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Pokazano od{" "}
              <span className="font-medium">{(currentPage - 1) * 10}</span> do{" "}
              <span className="font-medium">
                {Math.min(currentPage * 10, totalResults)}
              </span>{" "}
              z <span className="font-medium">{totalResults}</span> wyników
            </p>
          </div>
          <div>
            <nav
              className="isolate inline-flex -space-x-px rounded-md"
              aria-label="Pagination"
            >
              <Link
                to={getNavigateTo(currentPage - 1)}
                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 border hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </Link>
              {[...Array(totalPages).keys()].map((page) => (
                <Link
                  key={page}
                  to={getNavigateTo(page + 1)}
                  aria-current="page"
                  className={`relative z-10 inline-flex items-center border px-4 py-2 text-sm font-medium ${
                    isActive(page + 1)
                      ? "text-white bg-indigo-600 border-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      : "text-gray-700 focus:outline-offset-0 hover:bg-gray-50"
                  } focus:z-20`}
                >
                  {page + 1}
                </Link>
              ))}
              <Link
                to={getNavigateTo(currentPage + 1)}
                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 border hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Next</span>
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </Link>
            </nav>
          </div>
        </div>
      </div>
    )
  );
};

export default Pagination;
