import { Colors } from "@/common/themes/Color";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import Image from "next/image";

type SuggestCardType = {
  image: any;
  title: string;
  desc: string;
  onClick: () => void;
};

export const SuggestCard = ({
  image,
  title,
  desc,
  onClick,
}: SuggestCardType) => {
  return (
    <div css={sx.card} onClick={onClick}>
      <div css={sx.imageBox}>
        <Image fill src={image} alt="image" css={sx.img} />
      </div>
      <div css={sx.textBox}>
        <Typography css={sx.subTitle}>{title}</Typography>
        <div css={sx.text}>{desc}</div>
      </div>
    </div>
  );
};

const sx = {
  card: css`
    cursor: pointer;
  `,
  imageBox: css`
    width: 395px;
    height: 242px;
    position: relative;
    border-top-left-radius: 28px;
    border-top-right-radius: 28px;
  `,
  img: css`
    border-top-left-radius: 28px;
    border-top-right-radius: 28px;
  `,
  textBox: css`
    width: 395px;
    height: 242px;
    padding: 22px 28px 41px 28px;
    border-radius: 0 0 28px 28px;
    background: #fff;
  `,
  subTitle: css`
    color: ${Colors.BottomBlue};
    font-size: 22px;
    line-height: 28px;
    margin-bottom: 5px;
  `,
  text: css`
    font-size: 14px;
    line-height: 20px;
    color: #94a3b8;
  `,
};
