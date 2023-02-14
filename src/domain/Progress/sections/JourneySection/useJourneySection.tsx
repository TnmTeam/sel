import { useGetBanner } from "@/data/api/progress/useProressApiHooks";

export const useJourneySection = () => {
  const { data } = useGetBanner("test001");
  return {};
};
