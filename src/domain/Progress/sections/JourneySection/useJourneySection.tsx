import { useGetBanner } from "@/data/api/progress/useProgressApiHooks";

export const useJourneySection = () => {
  const { data } = useGetBanner(0, "test001", "test");
  return {};
};
