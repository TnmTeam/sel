import { css } from "@emotion/react";
import Image from "next/image";
import GlassImg from "@/assets/helppopup/main/glass-ic.png";
import ArrowImg from "@/assets/helppopup/main/arrow-ic.png";

export const SearchForHelp = () => {
  const models = [
    {
      title: "Search for help",
      src: GlassImg,
      alt: "glass",
      width: 16,
      height: 16,
      bgColor: "#f2f2f2",
      fontWeight: 600,
    },
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
    <div css={sx.root}>
      {models.map((it, index) => (
        <div css={sx.innerBox(it.bgColor, it.fontWeight)} key={index}>
          <p>{it.title}</p>
          <div css={sx.imageWrap}>
            <Image
              src={it.src}
              alt={it.alt}
              width={it.width}
              height={it.height}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

const sx = {
  imageWrap: css`
    width: 16px;
    display: flex;
    justify-content: center;
  `,

  innerBox: (bgColor: string, fontWeight?: number) => css`
    background-color: ${bgColor};
    font-weight: ${fontWeight};
    width: 100%;
    height: 41px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 8px;
    padding: 10px 12px;
  `,
  root: css`
    width: 99%;
    height: 147px;
    background-color: white;
    font-size: 14px;
    margin: 12px 1px;
    border-radius: 10px;
    padding: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06),
      0px 0px 0px 1px rgba(0, 0, 0, 0.08);
  `,
};
