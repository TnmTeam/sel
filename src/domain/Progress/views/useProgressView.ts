import { useBannerSection } from "../hooks/useBannerSection";
import { useCourseSection } from "../hooks/useCourseSection";
import { useSuggestSection } from "../hooks/useSuggestSection";
import { useJourneySection } from "../hooks/useJourneySection";
import { useReportSection } from "../hooks/useReportSection";


export const useProgressView = () => {
  const { bannerState } = useBannerSection();
  const { courseState } = useCourseSection();
  const { suggestState } = useSuggestSection();
  const { journeyState } = useJourneySection();
  const { reportState } = useReportSection();
  
  return {
    bannerState: bannerState,
    courseState: courseState,
    suggestState: suggestState,
    journeyState: journeyState,
    reportState: reportState,
  };
};
