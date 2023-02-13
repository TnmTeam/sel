import { Colors } from "@/common/themes/Color";
import { css } from "@emotion/react";
import { Box } from "@mui/material";
import { JourneyMap, JourneyTitle } from "./components";

export const JourneySection = () => {
  return (
    <Box css={sx.root}>
      <JourneyTitle />
      <JourneyMap />
    </Box>
  );
};
const sx = {
  root: css`
    width: 100%;
    height: 1185px;
    background-color: ${Colors.FlexBlue};
    position: relative; ;
  `,
};
