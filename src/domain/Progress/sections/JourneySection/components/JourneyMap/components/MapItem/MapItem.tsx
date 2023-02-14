import { css } from "@emotion/react";
import { Stack, Typography } from "@mui/material";
import { Circle } from "./Circle";
import { XPosition, YPosition } from "../../../../enum/mapItem.enum";
import { ItemType, MapItemType } from "../../../../types/mapItem.type";
import { CurrentCircle } from "./CurrentCircle";
import { MapCard } from "../MapCard/MapCard";

export const MapItem = ({
  textYPosition,
  circleXPosition,
  x,
  y,
  text,
  isHere,
}: MapItemType) => {
  return (
    <div css={sx.item(x, y)}>
      <div css={sx.itemContainer}>
        {textYPosition == YPosition.Bottom ? (
          <TextOnBottomItem
            isCircleOnRight={circleXPosition == XPosition.Right}
            text={text}
            isHere={isHere}
          />
        ) : (
          <TextOnTopItem
            isCircleOnRight={circleXPosition == XPosition.Right}
            text={text}
            isHere={isHere}
          />
        )}
      </div>
    </div>
  );
};

const sx = {
  item: (x: string, y: string) => css`
    width: 195px;
    position: absolute;
    left: ${x};
    bottom: ${y};
    &:nth-of-type(2) {
      width: 261px;
    }
  `,
  itemContainer: css`
    position: relative;
    width: 100%;
  `,
  text: css`
    text-align: left;
  `,
};

const TextOnBottomItem = ({ isCircleOnRight, text, isHere }: ItemType) => {
  return (
    <Stack spacing="16px">
      {isHere ? (
        <CurrentCircle isOnRight={isCircleOnRight} />
      ) : (
        <Circle isOnRight={isCircleOnRight} />
      )}
      <Typography
        fontSize="22px"
        lineHeight="28px"
        color="#0A0B26"
        css={sx.text}
      >
        {text}
      </Typography>
    </Stack>
  );
};

const TextOnTopItem = ({ isCircleOnRight, text, isHere }: ItemType) => {
  return (
    <Stack flexDirection={"column-reverse"}>
      {isHere ? (
        <CurrentCircle isOnRight={isCircleOnRight} />
      ) : (
        <Circle isOnRight={isCircleOnRight} />
      )}
      <Typography
        fontFamily="Readex Pro"
        fontSize="22px"
        lineHeight="28px"
        color="#0A0B26"
        mb="16px"
        css={sx.text}
      >
        {text}
      </Typography>
    </Stack>
  );
};
