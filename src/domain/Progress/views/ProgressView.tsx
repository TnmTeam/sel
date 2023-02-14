import { Stack } from "@mui/material";
import {
  BannerSection,
  CourseSection,
  ReportSection,
  SuggestSection,
} from "../sections";
import { JourneySection } from "../sections/JourneySection/JourneySection";

export const ProgressView = () => {
  return (
    <Stack>
      <BannerSection />
      <CourseSection />
      <ReportSection />
      <JourneySection />
      <SuggestSection />
    </Stack>
  );
};
