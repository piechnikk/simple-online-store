import { ROUTES } from "@/helpers";
import { Link } from "react-router-dom";

const BanerSection = () => {
  return (
    <section>
      <div className="relative px-6 py-32 sm:py-40 sm:px-12 lg:px-16">
        <div className="overflow-hidden inset-0 absolute">
          <img
            src="https://tailwindui.com/img/ecommerce-images/home-page-03-feature-section-full-width.jpg"
            alt=""
            className="object-center object-cover w-full h-full"
          />
        </div>
        <div className="opacity-50 bg-gray-900 inset-0 absolute"></div>
        <div className="text-center items-center flex-col flex max-w-3xl mx-auto relative">
          <h2 className="sm:text-4xl text-white tracking-tight font-semibold text-3xl">
            Długoterminowe myślenie
          </h2>
          <p className="text-white text-base mt-3">
            Zależy nam na odpowiedzialności, zrównoważonym rozwoju i etyce
            produkcja. Nasze podejście na małą skalę pozwala nam skupić się na
            jakość i zmniejszyć nasz wpływ. Robimy co w naszej mocy, aby opóźnić
            nieunikniona śmierć cieplna wszechświata.
          </p>
          <Link
            to={ROUTES.shop}
            className="sm:w-auto text-gray-900 font-medium text-base px-8 py-3 bg-white mt-8 rounded-lg"
          >
            Nasza historia
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BanerSection;
