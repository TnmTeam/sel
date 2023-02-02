import { Stack } from "@mui/material";
import { Banner, CourseProgressList } from "./components";

export const BannerSection = () => {
  return (
    <Stack>
      <Banner />
      <CourseProgressList />
    </Stack>
  );
};
