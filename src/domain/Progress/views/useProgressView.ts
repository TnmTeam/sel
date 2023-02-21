import { useBannerSection } from "../hooks/useBannerSection";
import { useCourseSection } from "../hooks/useCourseSection";
import { useSuggestSection } from "../hooks/useSuggestSection";
import { useReportSection } from "../hooks/useReportSection";

export const useProgressView = () => {
  const { bannerState } = useBannerSection();
  const { courseState } = useCourseSection();
  const { suggestState } = useSuggestSection();
  const { reportState } = useReportSection();
  
  return {
    bannerState: bannerState,
    courseState: courseState,
    suggestState: suggestState,
    reportState: reportState,
  };
};
