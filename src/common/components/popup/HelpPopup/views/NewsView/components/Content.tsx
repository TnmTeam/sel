import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import image1 from "@/assets/helppopup/news/image1.png";
import image2 from "@/assets/helppopup/news/image2.png";
import arrow from "@/assets/helppopup/messages/arrow.png";
import Image from "next/image";
export const Content = () => {
  const models = [
    {
      image: image1,
      width: 368,
      title: "What is Impacter Pathway?",
      text: "Here for the first time? See all the courses and the product tours to show you what you get when you register your child for a course.",
    },
    {
      image: image2,
      width: 352,
      title: "Recent Video",
      text: "Here for the first time? See all the courses and the product tours to show you what you get when you register your child for a course.",
    },
  ];
  return (
    <div css={sx.root}>
      <Typography variant="caption" fontWeight={600}>
        Latest
      </Typography>
      <Typography variant="caption" css={sx.gray}>
        From Impacter Pathway
      </Typography>
      {models.map((it, index) => (
        <div css={sx.newsBox} key={index}>
          <div css={sx.imgWrap}>
            <Image src={it.image} alt="pie" width={it.width} height={135} />
          </div>

          <div css={sx.textContainer}>
            <div css={sx.textInner}>
              <Typography variant="caption" fontWeight={700}>
                {it.title}
              </Typography>
              <div css={sx.textBox}>{it.text}</div>
            </div>
            <div css={sx.arrow}>
              <Image src={arrow} alt="arrow" width={6} height={9} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const sx = {
  imgWrap: css`
    height: 135px;
    width: 100%;
    overflow: hidden;
    border-radius: 10px 10px 0 0;
  `,
  arrow: css`
    display: flex;
    align-items: center;
    margin-left: 10px;
  `,
  textInner: css`
    padding-top: 10px;
  `,
  textContainer: css`
    display: flex;
    height: 128px;
    padding: 0 12px;
  `,

  textBox: css`
    width: 313px;
    line-height: 21px;
    font-size: 13px;
    color: #757171;
  `,
  newsBox: css`
    width: 100%;
    height: 260px;
    border-radius: 10px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06),
      0px 0px 0px 1px rgba(0, 0, 0, 0.08);

    margin-bottom: 20px;
  `,
  gray: css`
    color: #737373;
    margin-bottom: 17px;
  `,
  root: css`
    width: 100%;
    height: 537px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
    overflow-x: hidden;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  `,
};
