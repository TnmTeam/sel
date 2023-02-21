import { useGetBanner } from "@/data/api/progress/useProgressApiHooks";

export const useBannerSection = () => {
  const studentId = "636190c367b952049905f9b8";
  const courseId = "7dlc1002";
  const studentIdNumber = 283;

  const { data, isLoading } = useGetBanner(studentIdNumber, studentId, courseId);
  console.log("banner data ", data);

  if (!data) {
    return {
      bannerState: {
        result: null,
        isLoading: isLoading,
      },
    };
  }

  const response = data;
  // const progressResponse = data.responseData!!.courseProgressItem;

  // banner
  const [title, desc, rate] = [
    "Title",
    "desc",
    response.impact_score,
  ];

  const [
    hoursSpent,
    wordsWritten,
    videosUploaded,
    attendance,
    // selfControl,
    // purpose,
    // gratitude,
    // grit,
  ] = [
    response.hours_spent,
    response.words_written,
    response.video_upload,
    response.activities_completed,
    // progressResponse?.selfControl,
    // progressResponse?.purpose,
    // progressResponse?.gratitude,
    // progressResponse?.grit,
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
          // chart: {
          //   selfControl: selfControl,
          //   purpose: purpose,
          //   gratitude: gratitude,
          //   grit: grit,
          // },
        },
      },
      isLoading: isLoading,
    },
  };
};
