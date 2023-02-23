import { Stack } from "@mui/material";
import { css } from "@emotion/react";
import { ChartProgressItem } from "./ChartProgressItem";
import { ChartRateType } from "@/domain/Progress/types/banner.type";

export const ChartProgressList = ({
  selfControl,
  purpose,
  gratitude,
  grit,
}: ChartRateType) => {
  return (    
    <Stack direction={"row"} css={sx.wrapper}>
      <div css={sx.comingSoon}>Coming Soon</div>
      <ChartProgressItem progress={selfControl} progressDesc={"Self-Control"} />
      <ChartProgressItem progress={purpose} progressDesc={"Purpose"} />
      <ChartProgressItem progress={gratitude} progressDesc={"Gratitude"} />
      <ChartProgressItem progress={grit} progressDesc={"grit"} />
    </Stack>
  );
};

const sx = {
  wrapper: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  comingSoon: css`      
        background: rgba(0, 0, 0, 0.7);
        font-size: 60px;
        color: white;
        position: absolute;
        width: 1440px;        
        line-height: 200px;
        border-radius: 10px;
        text-align: center;
        z-index: 999;
        left: 235px;
    `,
};
