import { css, Stack } from "@mui/material";
import { CourseMedia } from "./components/CourseMedia/CourseMedia";
import { CourseProgress } from "./components/CourseProgress/CourseProgress";

export const CourseContent = () => {
  return (
    <Stack direction={"row"}>
      <CourseProgress />
      <CourseMedia />
    </Stack>
  );
};

const sx = {
  root: css`
    width: 100%;
    background-color: white;
  `,
};
