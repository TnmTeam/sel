import { useGetBanner } from "@/data/api/progress/useProgressApiHooks";

export const useJourneySection = () => {
  const { data } = useGetBanner("test001");
  return {};
};
