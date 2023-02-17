import { useGetImpacterScore } from "@/data/api/overview/useOverviewApiHooks";

export const useImpacterScoreSection = () => {
  const { data, isLoading } = useGetImpacterScore("636190c367b952049905f9b8", "7dlc1002");
  
  if (!data) {
    return {
        impacterSocreState: {
            result: null,
            isLoading: isLoading,
        },
    };
  }
  
  // impacterSocre
  const [studentName, rate, url] = [
    data?.name,
    data?.impacter_socre,
    data?.media,
  ];
  
  return {
    impacterSocreState: {
      result: {
        impacterScore: {
            rate: rate,
            studentName: studentName,
            url: url,
        },
      },
      isLoading: isLoading,
    },
  };
};
