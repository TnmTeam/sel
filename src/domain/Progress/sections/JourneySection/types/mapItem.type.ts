import { XPosition, YPosition } from "../enum/mapItem.enum";

export type MapItemType = {
  item: MapType;
  card: CardType;
};

export type MapType = {
  x: string;
  y: string;
  circleXPosition: XPosition;
  textYPosition: YPosition;
  text: string;
  isHere: boolean;
};
export type CardType = {
  image: any;
  title: string;
  desc: string;
};

export type ItemType = {
  isCircleOnRight: boolean;
  text: string;
  isHere: boolean;
  cardState: CardType;
};

export type MapItemListType = {
  x: string;
  y: string;
  circleXPosition: XPosition;
  textYPosition: YPosition;
}
