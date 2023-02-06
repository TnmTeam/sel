import { Stack } from "@mui/material";
import { CourseMedia } from "./components/CourseMedia/CourseMedia";
import { CourseProgress } from "./components/CourseProgress/CourseProgress";
import { css } from "@emotion/react";

export const CourseContent = () => {
  return (
    <Stack direction={"row"} css={sx.root}>
      <CourseProgress />
      <CourseMedia />
    </Stack>
  );
};

const sx = {
  root: css`
    width: 100%;
    background-color: white;
    padding: 26px 40px;
    border-radius: 20px;
  `,
};
