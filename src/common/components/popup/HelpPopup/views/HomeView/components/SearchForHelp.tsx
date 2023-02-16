import { css } from "@emotion/react";
import Image from "next/image";
import GlassImg from "@/assets/helppopup/main/glass-ic.png";
import ArrowImg from "@/assets/helppopup/main/arrow-ic.png";
import { Stack, Typography } from "@mui/material";

type SearchForHelpType = {
  onHelpTab: () => void;
};
export const SearchForHelp = ({ onHelpTab }: SearchForHelpType) => {
  const models = [
    {
      title: "Help Questions",
      src: ArrowImg,
      alt: "arrow",
      width: 6,
      height: 9,
      bgColor: "#fff",
    },
    {
      title: "Product Tour",
      src: ArrowImg,
      alt: "arrow",
      width: 6,
      height: 9,
      bgColor: "#fff",
    },
  ];

  return (
    <Stack css={sx.root}>
      <div onClick={onHelpTab} css={sx.innerBox("#f2f2f2")}>
        <Typography variant="caption" fontWeight={600}>
          {"Search for help"}
        </Typography>
        <Image src={GlassImg} alt={"glass"} width={16} height={16} />
      </div>
      {models.map((it, index) => (
        <div css={sx.innerBox(it.bgColor)} key={index}>
          <Typography variant="caption">{it.title}</Typography>
          <Image
            src={it.src}
            alt={it.alt}
            width={it.width}
            height={it.height}
          />
        </div>
      ))}
    </Stack>
  );
};

const sx = {
  root: css`
    width: 99%;
    height: 147px;
    background-color: white;
    margin: 12px 1px;
    border-radius: 10px;
    padding: 8px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06),
      0px 0px 0px 1px rgba(0, 0, 0, 0.08);
  `,
  innerBox: (bgColor: string) => css`
    background-color: ${bgColor};
    width: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 8px;
    padding: 10px 12px;
    cursor: pointer;
  `,
};
