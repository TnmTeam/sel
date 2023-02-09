import { css } from "@emotion/react";
import arrow from "@/assets/helppopup/help/arrow-ic.png";
import Image from "next/image";
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
      <div css={sx.topText}>5 collections</div>
      <ul css={sx.contentBox}>
        {models.map((it, index) => (
          <li css={sx.textBox} key={index}>
            <div css={sx.textWrap}>
              <p css={sx.title}>{it.title}</p>
              <div css={sx.text}>{it.text}</div>
            </div>
            <div css={sx.iconWrap}>
              <Image src={arrow} alt="arrow" width={6} height={9} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const sx = {
  iconWrap: css`
    display: flex;
    align-items: center;
    margin-right: 5px;
  `,
  textWrap: css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,
  text: css`
    color: #757171;
    font-size: 13px;
    line-height: 20px;
  `,
  title: css`
    font-size: 14px;
    font-weight: 700;
  `,
  textBox: css`
    height: 125px;
    border-bottom: 1px solid rgba(216, 216, 216, 0.69);
    display: flex;
    padding: 20px 0;
  `,
  contentBox: css`
    padding: 0 20px;
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
