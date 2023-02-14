import { css } from "@emotion/react";
import Image from "next/image";
import ImageCurrCircle from "@/assets/progress/jouney/img-current-circle.png";
type CircleType = {
  isOnRight: boolean;
};

export const CurrentCircle = ({ isOnRight }: CircleType) => {
  return (
    <div css={sx.circle(isOnRight)}>
      <Image fill src={ImageCurrCircle} alt="circle" />
    </div>
  );
};

const sx = {
  circle: (isOnRight: boolean) => css`
    position: relative;
    width: 67px;
    aspect-ratio: 1;
    align-self: ${isOnRight ? "end" : "start"};
    cursor: pointer;
  `,
};
