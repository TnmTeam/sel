import { css } from "@emotion/react";
import Image from "next/image";
import { useState } from "react";
import { BottombarModels } from "./bottombar.model";

export const BottomBar = () => {
  const models = BottombarModels;
  const [isClicked, setIsClicked] = useState(0);
  const onClick = (index: number) => {
    setIsClicked(index);
  };
  return (
    <div css={sx.root}>
      {models.map((it, index) => (
        <div css={sx.innerBox} key={index} onClick={() => onClick(index)}>
          <Image
            src={index == isClicked ? it.selected : it.src}
            alt={it.alt}
            width={24}
            height={24}
          />
          <span css={sx.title(index == isClicked)}>{it.title}</span>
        </div>
      ))}
    </div>
  );
};

const sx = {
  title: (isClicked: boolean) => css`
    color: ${isClicked ? "#147AD6" : "#1A1A1A"};
  `,
  innerBox: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    cursor: pointer;
  `,
  root: css`
    width: 100%;
    height: 81px;
    border-top: solid 1px rgba(0, 0, 0, 0.05);
    display: flex;
    position: absolute;
    background-color: #fff;
    padding: 14px;
    bottom: 0;
    left: 0;
    justify-content: space-around;
    z-index: 55;
  `,
};
