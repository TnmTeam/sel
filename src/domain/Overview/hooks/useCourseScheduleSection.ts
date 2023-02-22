import { useGetCourseSchedule } from "@/data/api/overview/useOverviewApiHooks";

export const useCourseScheduleSection = () => {
  const courseId = "7dlc1002";
  const { data, isLoading } = useGetCourseSchedule(courseId);
  
  if (!data) {
    return {
        courseScheduleState: {
            result: null,
            isLoading: isLoading,
        },
    };
  }
  
  // CourseSchedule date range
  const [startDate, endDate] = [
    data?.start_date,
    data?.end_date
  ];
  
  return {
    courseScheduleState: {
      result: {
        dateRange: {
            startDate: startDate,
            endDate: endDate,
        },
      },
      isLoading: isLoading,
    },
  };
};
