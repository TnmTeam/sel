import { useGetSuggestedCourse } from "@/data/api/progress/useProgressApiHooks";
import { CardType } from "../types/suggest.type";
import { SuggestCourseUnits } from "@/data/api/progress/progress.dto";

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

  const response = data.responseData;
  const [cards] = [response];

  return {
    suggestState: {
      result: mappingToCards(cards),
      isLoading: isLoading,
    },
  };
};

const mappingToCards = (list: SuggestCourseUnits): CardType[] => {
  const result = list.map((it) => ({
    title: it.title,
    desc: it.description,
    image: it.thumbnail,
  }));

  return result;
};
