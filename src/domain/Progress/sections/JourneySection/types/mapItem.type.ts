import { XPosition, YPosition } from "../enum/mapItem.enum";

export type MapItemType = {
  x: string;
  y: string;
  circleXPosition: XPosition;
  textYPosition: YPosition;
  text: string;
  isHere: boolean;
};

export type ItemType = {
  isCircleOnRight: boolean;
  text: string;
  isHere: boolean;
};
