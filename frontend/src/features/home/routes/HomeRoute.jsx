import {
  MainTilesSection,
  CategoriesSections,
  BanerSection,
} from "@/features/home/components";

const HomeRoute = () => {
  return (
    <div>
      <MainTilesSection />
      <CategoriesSections />
      <BanerSection />
    </div>
  );
};

export default HomeRoute;
