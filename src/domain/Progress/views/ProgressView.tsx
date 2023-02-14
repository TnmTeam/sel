import { Stack } from "@mui/material";
import {
  BannerSection,
  CourseSection,
  ReportSection,
  SuggestSection,
} from "../sections";
import { JourneySection } from "../sections/JourneySection/JourneySection";
import { useProgressView } from "./useProgressView";

export const ProgressView = () => {
  const { bannerState, courseState, suggestState } = useProgressView();
  return (
    <Stack>
      <BannerSection data={bannerState} />
      <CourseSection data={courseState} />
      <ReportSection />
      <JourneySection />
      <SuggestSection data={suggestState} />
    </Stack>
  );
};
