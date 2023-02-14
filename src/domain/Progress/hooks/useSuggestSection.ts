import { useGetSuggestedCourse } from "@/data/api/progress/useProgressApiHooks";

export const useSuggestSection = () => {
  const { data, isLoading } = useGetSuggestedCourse("test001");

  if (!data) {
    return {
      suggestState: {
        result: null,
        isLoading: isLoading,
      },
    };
  }

  return {
    suggestState: {
      result: data.responseData,
      isLoading: isLoading,
    },
  };
};
