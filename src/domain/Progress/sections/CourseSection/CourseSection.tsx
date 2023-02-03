import { Colors } from "@/common/themes/Color";
import { css } from "@emotion/react";
import { Stack } from "@mui/material";
import { CourseContent, CourseDescription } from "./components";

export const CourseSection = () => {
  return (
    <Stack css={sx.root}>
      <CourseDescription />
      <CourseContent />
    </Stack>
  );
};

const sx = {
  root: css`
    width: 100%;
    background-color: ${Colors.FlexBlue};
    padding: 36px 65px 53px 65px;
  `,
};
