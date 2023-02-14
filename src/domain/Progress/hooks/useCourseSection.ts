import { useGetCourse } from "@/data/api/progress/useProgressApiHooks";

export const useCourseSection = () => {
  const { data, isLoading } = useGetCourse("test001");

  if (!data) {
    return {
      courseState: {
        result: null,
        isLoading: isLoading,
      },
    };
  }
  const response = data.resonseData!!;

  const [courseDesc, units] = [response.courseDescription, response.unitList];
  return {
    courseState: {
      result: {
        courseDesc: courseDesc,
        units: units,
      },
      isLoading: isLoading,
    },
  };
};
