import { useQuery } from "react-query";
import ProgressApiService from "./progress.api";

export const useGetBanner = (id: string) => {
  return useQuery(["banner", id], () => ProgressApiService.getBanner(id));
};
