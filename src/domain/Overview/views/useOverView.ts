import { useImpacterScoreSection } from "../hooks/useImpacterScoreSection";
import { useCourseScheduleSection } from "../hooks/useCourseScheduleSection";
import { useCourseProgressSection } from "../hooks/useCourseProgressSection";


export const useOverView = () => {
  const { impacterSocreState } = useImpacterScoreSection();
  const { courseScheduleState } = useCourseScheduleSection();
  const { courseProgressState } = useCourseProgressSection();

  return {
    impacterSocreState: impacterSocreState,
    courseScheduleState: courseScheduleState,
    courseProgressState: courseProgressState,
  };
};
