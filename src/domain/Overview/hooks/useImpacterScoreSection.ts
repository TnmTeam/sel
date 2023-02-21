import { useGetImpacterScore } from "@/data/api/overview/useOverviewApiHooks";

export const useImpacterScoreSection = () => {
  const { data, isLoading } = useGetImpacterScore("6337a6e9f62401d9f405913c", "7dlcnlym");
  
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
