import { useGetBanner } from "@/data/api/progress/useProgressApiHooks";

export const useBannerSection = () => {
  const { data, isLoading } = useGetBanner("test001");

  if (!data) {
    return {
      bannerState: {
        result: null,
        isLoading: isLoading,
      },
    };
  }

  const response = data.responseData!!;
  const progressResponse = data.responseData!!.courseProgressItem;

  // banner
  const [title, desc, rate] = [
    response?.courseMainTitle,
    response?.courseSubTitle,
    response?.courseProgressPercent,
  ];

  // progress
  const [
    hoursSpent,
    wordsWritten,
    videosUploaded,
    attendance,
    selfControl,
    purpose,
    gratitude,
    grit,
  ] = [
    progressResponse?.hoursSpent,
    progressResponse?.wordsWritten,
    progressResponse?.videosUploaded,
    progressResponse?.attendance,
    progressResponse?.selfControl,
    progressResponse?.purpose,
    progressResponse?.gratitude,
    progressResponse?.grit,
  ];

  return {
    bannerState: {
      result: {
        banner: {
          title: title,
          desc: desc,
          rate: rate,
        },
        rates: {
          plain: {
            hoursSpent: hoursSpent,
            wordsWritten: wordsWritten,
            videosUploaded: videosUploaded,
            attendance: attendance,
          },
          chart: {
            selfControl: selfControl,
            purpose: purpose,
            gratitude: gratitude,
            grit: grit,
          },
        },
      },
      isLoading: isLoading,
    },
  };
};
