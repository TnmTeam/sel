import { css } from "@emotion/react";
import { Stack, Typography } from "@mui/material";

type CurrentCourseTitleType = {
  caption: string;
  title: string;
  desc: string;
};

export const CurrentCourseTitle = ({
  caption,
  title,
  desc,
}: CurrentCourseTitleType) => (
  <Stack css={sx.title}>
    <Typography variant="subtitle1" color="white" mb={"6px"}>
      {caption}
    </Typography>
    <Typography variant="h2" color="white" mb={"4px"}>
      {title + ":"}
    </Typography>
    <Typography variant="h3" fontWeight={400} color="white">
      {desc}
    </Typography>
  </Stack>
);

const sx = {
  title: css`
    width: 510px;
    position: absolute;
    top: 79px;
    left: 99px;
  `,
};
