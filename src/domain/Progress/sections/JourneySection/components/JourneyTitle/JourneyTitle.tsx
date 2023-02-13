import { css } from "@emotion/react";
import { Stack, Typography } from "@mui/material";

export const JourneyTitle = () => {
  const models = {
    name: "Jamie",
  };
  return (
    <Stack spacing="10px" css={sx.title}>
      <Typography
        variant="h3"
        lineHeight="46px"
        color=" #0A0B26"
        letterSpacing={"0.02em"}
      >
        {"Student Success Journey"}
      </Typography>
      <Typography
        variant="h2"
        lineHeight="52px"
        color=" #0A0B26"
        letterSpacing={"0.02em"}
      >{`${models.name}’s Journey`}</Typography>
    </Stack>
  );
};

const sx = {
  title: css`
    position: absolute;
    top: 57px;
    left: 88px;
  `,
};
