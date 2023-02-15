import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import image1 from "@/assets/helppopup/news/image1.png";
import image2 from "@/assets/helppopup/news/image2.png";
import { NewsCard } from "./NewsCard";
export const Content = () => {
  const models = [
    {
      image: image1,
      title: "What is Impacter Pathway?",
      text: "Here for the first time? See all the courses and the product tours to show you what you get when you register your child for a course.",
    },
    {
      image: image2,
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
        <NewsCard
          key={index}
          image={it.image}
          title={it.title}
          text={it.text}
        />
      ))}
    </div>
  );
};

const sx = {
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
