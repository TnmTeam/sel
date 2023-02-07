import { Stack } from "@mui/material";
import { BannerSection, CourseSection, ReportSection } from "../sections";

export const ProgressView = () => {
  return (
    <Stack>
      <BannerSection />
      <CourseSection />
      <ReportSection />
    </Stack>
  );
};
