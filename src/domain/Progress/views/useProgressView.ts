import { useBannerSection } from "../hooks/useBannerSection";
import { useCourseSection } from "../hooks/useCourseSection";
import { useSuggestSection } from "../hooks/useSuggestSection";

export const useProgressView = () => {
  const { bannerState } = useBannerSection();
  const { courseState } = useCourseSection();
  const { suggestState } = useSuggestSection();

  return {
    bannerState: bannerState,
    courseState: courseState,
    suggestState: suggestState,
  };
};
