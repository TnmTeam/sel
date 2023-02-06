import { Colors } from "@/common/themes/Color";
import { css } from "@emotion/react";
import { Stack, Typography } from "@mui/material";
import { AnswerItem } from "./AnswerItem";

export const ActivityContent = () => {
  const models = {
    head: "Think About What You've Learned About GROWTH and FIXED Mindset, and match the character traits below with the appropriate way of thinking. (Refer to the chart below as needed for examples and definitions of GROWTH/FIXED mindset.",
    list: [
      {
        title: "Talents are something you're born with.",
        answer: "Growth Mindset",
      },
      { title: "Anyone can learn anything.", answer: "Fixed Mindset" },
      {
        title: "Effort results in improved outcomes towards a desired goal.",
        answer: "Growth Mindset",
      },
      {
        title:
          "No matter how hard I try, I'll never be able to dunk a basketball",
        answer: "Fixed Mindset",
      },
      {
        title: "Anyone can learn Calculus",
        answer: "Growth Mindset",
      },
      {
        title: "You have to go to any Ivy League college to work at NASA.",
        answer: "Fixed Mindset",
      },
    ],
  };
  return (
    <Stack css={sx.root}>
      <Stack css={sx.container}>
        <Typography
          variant="body2"
          fontWeight={400}
          color={Colors.BasicText}
          letterSpacing="0.02em"
          mb={"20px"}
        >
          {models.head}
        </Typography>
        <Typography
          variant="body2"
          fontWeight={700}
          color={Colors.BasicText}
          letterSpacing="0.02em"
        >
          {"Answers"}
        </Typography>
        <Stack spacing={"20px"}>
          {models.list.map((it, index) => (
            <AnswerItem key={index} title={it.title} answer={it.answer} />
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
