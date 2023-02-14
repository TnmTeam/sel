import { useMutation, useQuery } from "react-query";
import ProgressApiService from "./progress.api";

export const useGetBanner = (id: string) => {
  return useQuery(["banner", id], () => ProgressApiService.getBanner(id));
};

export const useGetCourse = (id: string) => {
  return useQuery(["course", id], () => ProgressApiService.getCourse(id));
};

export const useGetSuggestedCourse = (id: string) => {
  return useQuery(["suggested-course", id], () =>
    ProgressApiService.getSuggestedCourse(id)
  );
};

export const useGetUnit = () => {
  return useMutation((index: number) => ProgressApiService.getUnit(index));
};
