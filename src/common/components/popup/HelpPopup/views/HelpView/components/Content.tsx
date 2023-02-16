import { css } from "@emotion/react";
import arrow from "@/assets/helppopup/help/arrow-ic.png";
import Image from "next/image";
import { Stack, Typography } from "@mui/material";
export const Content = () => {
  const models = [
    {
      title: "What is Impacter Pathway?",
      text: "Here for the first time? See all the courses and the product tours to show you what you get when you register your child for a course.",
    },
    {
      title: "What is the Parent Portal?",
      text: "Here for the first time? See all the courses and the product tours to show you what you get when you register your child for a course.",
    },
    {
      title: "How to purchase another course.",
      text: "Here for the first time? See all the courses and the product tours to show you what you get when you register your child for a course.",
    },
    {
      title: "Workbook Guides",
      text: "Here for the first time? See all the courses and the product tours to show you what you get when you register your child for a course.",
    },
  ];
  return (
    <div css={sx.root}>
      <div css={sx.topText}>{`${models.length} collections`}</div>
      <Stack component={"ul"} paddingX="20px">
        {models.map((it, index) => (
          <li css={sx.box} key={index}>
            <Stack
              height="100%"
              spacing={"4px"}
              justifyContent={"space-between"}
            >
              <Typography variant="caption" fontWeight={700}>
                {it.title}
              </Typography>
              <Typography fontSize="13px" lineHeight="20px" color="#757171">
                {it.text}
              </Typography>
            </Stack>
            <Image src={arrow} alt="arrow" width={6} height={9} />
          </li>
        ))}
      </Stack>
    </div>
  );
};

const sx = {
  box: css`
    height: 125px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    border-bottom: 1px solid rgba(216, 216, 216, 0.69);
    padding: 20px 0;
    padding-right: 10px;
    cursor: pointer;
  `,
  topText: css`
    padding: 0 24px;
    display: flex;
    height: 58px;
    align-items: center;
    border: 1px solid rgba(216, 216, 216, 0.69);
    font-size: 18px;
    font-weight: 500;
  `,
  root: css`
    width: 100%;
    height: 481px;
    overflow: scroll;
    overflow-x: hidden;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  `,
};
