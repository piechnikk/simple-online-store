import { Outlet, ScrollRestoration } from "react-router-dom";
import { Navigation } from "@/features/layout/components";

const DefaultLayout = () => {
  return (
    <div className="flex flex-col h-full">
      <Navigation />
      <Outlet />
      <ScrollRestoration />
    </div>
  );
};

export default DefaultLayout;
