import { Link } from "react-router-dom";

const NotFound = ({
  render = null,
  small = false,
  title,
  excerpt,
  className = "",
}) => {
  return (
    <div className={`text-center ${className}`}>
      <h1
        className={`tracking-tight text-gray-900 ${
          small ? "text-3xl font-semibold" : "text-3xl sm:text-5xl font-bold"
        }`}
      >
        {title}
      </h1>
      <p
        className={`text-base leading-7 text-gray-600 ${
          small ? "mt-3" : "mt-6"
        }`}
      >
        {excerpt}
      </p>
      <div
        className={`flex items-center justify-center gap-x-6 ${
          small ? "mt-6" : "mt-10"
        }`}
      >
        {render}
        <Link to="/" className="text-sm font-semibold text-gray-900">
          Pomocą techniczna <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
