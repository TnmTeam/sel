import { css } from "@emotion/react";
import icon from "@/assets/helppopup/messages/icon.png";
import arrow from "@/assets/helppopup/messages/arrow.png";
import Image from "next/image";

type MessageBoxType = {
  text: string;
  author: string;
  date: string;
};
export const MessageBox = ({ text, author, date }: MessageBoxType) => {
  return (
    <div css={sx.root}>
      <Image src={icon} alt="icon" width={32} height={32} />
      <div css={sx.textInner}>
        <p css={sx.text1}>{text}</p>
        <p css={sx.text2}>
          {author} • {date}
        </p>
      </div>
      <div css={sx.arrowWrap}>
        <Image src={arrow} alt="arrow" width={6} height={9} />
      </div>
    </div>
  );
};

const sx = {
  root: css`
    padding: 20px 0 22px 0;
    box-sizing: border-box;
    margin: 0 16px;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    height: 87px;
    border-bottom: solid 1px rgba(216, 216, 216, 0.69);
    cursor: pointer;
  `,
  arrowWrap: css`
    display: flex;
    align-items: center;
  `,
  text2: css`
    color: #757171;
  `,
  text1: css`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 21px;
  `,
  textInner: css`
    width: 294px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,
};
