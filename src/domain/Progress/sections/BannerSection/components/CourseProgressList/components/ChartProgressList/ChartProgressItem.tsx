import { Stack, Typography } from "@mui/material";
import { css } from "@emotion/react";
import { ProgressItemType } from "../types/progress.type";
import { PieChart } from "react-minimal-pie-chart";
import { Colors } from "@/common/themes/Color";

export const ChartProgressItem = ({
  progress,
  progressDesc,
}: ProgressItemType) => {
  return (
    <Stack css={sx.item}>
      <div css={sx.chart}>
        <PieChart
          data={[{ value: 1, key: 1, color: Colors.BackBlue }]}
          reveal={progress * 20}
          lineWidth={14}
          background={"#DBDFF1"}
          lengthAngle={230}
          startAngle={155}
          rounded
          animate
        />
      </div>
      <Stack css={sx.progressWrapper}>
        <Typography
          variant="h1"
          color="#253858"
          letterSpacing={"-1.75px"}
          mb="12px"
        >
          {progress}
        </Typography>
        <Typography
          variant="subtitle1"
          lineHeight={1}
          color=" #AAAEC1"
          letterSpacing={"1.5px"}
          mb="10px"
        >
          {"out of 5"}
        </Typography>
        <Typography variant="subtitle1" color="#253858" letterSpacing={"1.5px"}>
          {progressDesc}
        </Typography>
      </Stack>
    </Stack>
  );
};

const sx = {
  item: css`
    width: 210px;
    position: relative;
  `,
  chart: css`
    width: 90%;
    margin: 0 auto;
  `,
  progressWrapper: css`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 28%;
    left: 50%;
    transform: translateX(-50%);
  `,
};
