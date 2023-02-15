import { css } from "@emotion/react";
import { CardType } from "../../../../types/mapItem.type";
import { MapCard } from "../MapCard/MapCard";
type CircleType = {
  isOnRight: boolean;
  cardState: CardType;
};

export const Circle = ({ isOnRight, cardState }: CircleType) => {
  return (
    <div css={sx.circleContainer(isOnRight)}>
      <div className="circle" css={sx.circle}></div>
      <MapCard isCircleOnRight={isOnRight} cardState={cardState} />
    </div>
  );
};

const sx = {
  circleContainer: (isOnRight: boolean) => css`
    position: relative;
    width: 31px;
    aspect-ratio: 1;
    align-self: ${isOnRight ? "end" : "start"};
    &:hover {
      .circle {
        transition: 0.3s;
        background-color: #6394c7;
      }
      .mapCard {
        display: block;
        z-index: 3;
      }
    }
  `,
  circle: css`
    width: 100%;
    height: 100%;
    border-radius: 20px;
    background-color: #dedfdf;
    cursor: pointer;
  `,
};
