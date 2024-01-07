import { Link } from "react-router-dom";
import { HomeIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

const Breadcrumbs = ({ items = [] }) => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li className="inline-flex items-center">
          <Link
            to="/"
            className="inline-flex items-center text-sm font-medium text-gray-700"
          >
            <HomeIcon className="h-4 w-4" />
          </Link>
        </li>
        {items.map(({ name, to }) => (
          <li key={to}>
            <div className="flex items-center">
              <ChevronRightIcon className="w-4 h-4 text-gray-700" />
              <Link
                to={to}
                className="ms-2 md:ms-3 text-sm font-medium text-gray-700"
              >
                {name}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
