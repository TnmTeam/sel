import { Colors } from "@/common/themes/Color";
import { css } from "@emotion/react";
import { Button, Stack, Typography, TypographyProps } from "@mui/material";
import Image from "next/image";
import { CardType } from "../../../../types/mapItem.type";

type MapCardType = {
  isCircleOnRight: boolean;
  cardState: CardType;
};

export const MapCard = ({ isCircleOnRight, cardState }: MapCardType) => {
  return (
    <Stack className="mapCard" css={sx.card(isCircleOnRight)}>
      <div css={sx.image}>
        <Image fill src={cardState.image} alt="img" />
      </div>
      <Stack spacing="15px" css={sx.content}>
        <Stack spacing="4px">
          <CardTitle> {cardState.title}</CardTitle>
          <CardDesc>{cardState.desc}</CardDesc>
        </Stack>
        <Button fullWidth css={sx.btn} style={{display:"none"}}>
          {cardState.btnText}
        </Button>
      </Stack>
    </Stack>
  );
};

const sx = {
  card: (isCircleOnRight: boolean) => css`
    width: 309px;
    display: none;
    position: absolute;
    ${isCircleOnRight ? "bottom: 12px" : "bottom: 12px"};
    ${isCircleOnRight ? "right: 12px" : "left: 12px"};
    border-radius: 28px;
    overflow: hidden;
    box-shadow: 12px 0px 24px rgba(0, 0, 0, 0.12);
    z-index: 2;
  `,
  image: css`
    position: relative;
    width: 100%;
    height: 150px;
  `,
  content: css`
    width: 100%;
    flex: 1;
    padding: 17px 24px 22px 24px;
    background-color: white;
  `,
  title: css`
    width: 100%;
    height: 56px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  `,
  desc: css`
    width: 100%;
    height: 140px;
    letter-spacing: 0.25px;
    white-space: break-spaces;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 7;
    -webkit-box-orient: vertical;
  `,
  btn: css`
    height: 37px;
    background-color: #6394c7;
    border-radius: 6px;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    text-transform: none;
    color: white;
    &:hover {
      background-color: #6394c7;
    }
  `,
};

const CardTitle = (p: TypographyProps) => {
  return (
    <Typography
      fontSize="22px"
      lineHeight="28px"
      color={Colors.BottomBlue}
      css={sx.title}
      {...p}
    />
  );
};

const CardDesc = (p: TypographyProps) => {
  return (
    <Typography
      fontSize="12px"
      lineHeight="20px"
      color="#94A3B8"
      css={sx.desc}
      {...p}
    />
  );
};
