import { Colors } from "@/common/themes/Color";
import { css } from "@emotion/react";
import { Stack, Typography } from "@mui/material";
import { AnswerItem } from "./AnswerItem";
import { ContentResponse1 } from "@/domain/Progress/types/course.type";

//type DataType = {
//  models: ContentResponse1;
//};

//export const ActivityContent = ({ models }: DataType) => {
  export const ActivityContent = () => {
  const models = {
    contentList: [
      {
        question: "Talents are something you're born with.",
        answer: "Growth Mindset",
      },
      { question: "Anyone can learn anything.", answer: "Fixed Mindset" },
      {
        question: "Effort results in improved outcomes towards a desired goal.",
        answer: "Growth Mindset",
      },
      {
        question:
          "No matter how hard I try, I'll never be able to dunk a basketball",
        answer: "Fixed Mindset",
      },
      {
        question: "Anyone can learn Calculus",
        answer: "Growth Mindset",
      },
      {
        question: "You have to go to any Ivy League college to work at NASA.",
        answer: "Fixed Mindset",
      },
    ],
  };

  return (
    <Stack css={sx.root}>
      <Stack css={sx.container}>
        <Typography
          variant="h1"
          fontSize="30px"
          fontWeight={700}
          color={Colors.BasicText}
          letterSpacing="0.02em"
        >
          {"Question & Answers"}
        </Typography>
        <Stack spacing={"20px"}>
          {models.contentList.map((it, index) => (
            <AnswerItem key={index} question={it.question} answer={it.answer} />
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

const sx = {
  root: css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding-top: 100px;
  `,

  container: css`
    width: 556px;
    height: 483px;
  `,
};
