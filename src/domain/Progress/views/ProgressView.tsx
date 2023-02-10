import { Stack } from "@mui/material";
import {
  BannerSection,
  CourseSection,
  ReportSection,
  SuggestSection,
} from "../sections";

export const ProgressView = () => {
  return (
    <Stack>
      <BannerSection />
      <CourseSection />
      <ReportSection />
      <SuggestSection />
    </Stack>
  );
};
