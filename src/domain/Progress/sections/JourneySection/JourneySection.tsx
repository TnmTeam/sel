import { Colors } from "@/common/themes/Color";
import { css } from "@emotion/react";
import { Box } from "@mui/material";
import { CustomProgress } from "@/common/components/progress";
import { Stack } from '@mui/material';
import { JourneyMap, JourneyTitle } from "./components";
import { JourneyItemType } from "../../types/journey.type";

type DataType = {
  data: JourneyItemType;
};

export const JourneySection = ({ data }: DataType) => {
  if (!data.result || data.isLoading) {
    return (
        <Stack height={"452px"} justifyContent="center" alignItems={"center"}>
            <CustomProgress />
        </Stack>
    );
  }
  return (
    <Box css={sx.root}>
      <JourneyTitle />
      <JourneyMap data={data.result} />
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
