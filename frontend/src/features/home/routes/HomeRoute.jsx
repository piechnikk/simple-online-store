import {
  MainTilesSection,
  CategoriesSections,
  BanerSection,
} from "@/features/home/components";
import { usePage } from "@/hooks";

const HomeRoute = () => {
  usePage({ title: "Strona Główna" });

  return (
    <div>
      <MainTilesSection />
      <CategoriesSections />
      <BanerSection />
    </div>
  );
};

export default HomeRoute;
