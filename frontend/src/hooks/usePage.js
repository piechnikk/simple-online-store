import { useEffect } from "react";

const usePage = ({ title }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};

export default usePage;
