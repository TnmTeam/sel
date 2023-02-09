import { css } from "@emotion/react";
import Image from "next/image";
import glass from "@/assets/helppopup/help/glass-ic.png";
export const SearchBar = () => {
  return (
    <div css={sx.root}>
      <input type="text" placeholder="Search for help" css={sx.inputBox} />
      <Image src={glass} alt="glass" width={16} height={16} />
    </div>
  );
};

const sx = {
  inputBox: css`
    width: 340px;
    background-color: #f2f2f2;
    border: none;
    outline: none;
    line-height: 38px;
    height: 38px;
    &::placeholder {
      color: #979797;
      font-weight: 600;
    }
  `,
  root: css`
    width: 368px;
    height: 41px;
    background-color: #f2f2f2;
    border-radius: 18px;
    display: flex;
    align-items: center;
    padding: 0 12px;
  `,
};
