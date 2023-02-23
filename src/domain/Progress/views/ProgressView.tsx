import { Stack } from "@mui/material";
import {
  BannerSection,
  CourseSection,
  ReportSection,
  SuggestSection,
  JourneySection,
} from "../sections";
import { useProgressView } from "./useProgressView";

export const ProgressView = () => {
  const { bannerState, courseState, suggestState, journeyState, reportState } = useProgressView();
  return (
    <Stack>
      <BannerSection data={bannerState} />
      <CourseSection data={courseState} />
      <ReportSection data={reportState} />
      <JourneySection data={journeyState} />
      <SuggestSection data={suggestState} />
    </Stack>
  );
};
