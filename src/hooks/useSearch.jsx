import { useLocation } from "react-router-dom";

export const useSearch = () => {
  const { search } = useLocation();
  console.log(search);

  return new URLSearchParams(search);
};
