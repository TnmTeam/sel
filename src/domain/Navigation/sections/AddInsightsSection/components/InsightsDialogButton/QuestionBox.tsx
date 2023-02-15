import { Colors } from "@/common/themes/Color";
import { css } from "@emotion/react";
import { Stack, Typography, TypographyProps } from "@mui/material";
import { useState } from "react";

type QuestionBoxType = {
  question: string;
  answers: string[];
};

export const QuestionBox = ({ question, answers }: QuestionBoxType) => {
  const [answerIndex, setAnswerIndex] = useState<number | null>(null);
  const handleIndexChange = (index: number) => {
    setAnswerIndex(index);
  };
  return (
    <Stack spacing="20px">
      <QuestionItem>{question}</QuestionItem>
      <Stack spacing="7px" paddingLeft="31.5px">
        {answers.map((it, index) => (
          <AnswerItem
            key={index}
            answer={it}
            onClick={() => handleIndexChange(index)}
            isSelected={index == answerIndex}
          />
        ))}
      </Stack>
    </Stack>
  );
};

const QuestionItem = (p: TypographyProps) => {
  return (
    <Typography
      variant="body1"
      lineHeight="24px"
      color={Colors.Gray800}
      {...p}
    />
  );
};

type AnswerItemType = {
  answer: string;
  onClick: () => void;
  isSelected: boolean;
};

const AnswerItem = ({ answer, onClick, isSelected }: AnswerItemType) => {
  return (
    <div css={sx.answerItemWrapper} onClick={onClick}>
      <div css={sx.circle(isSelected)}></div>
      <Typography variant="body2" color={Colors.Gray800}>
        {answer}
      </Typography>
    </div>
  );
};

const sx = {
  answerItemWrapper: css`
    display: flex;
    align-items: center;
    gap: 14.5px;
    cursor: pointer;
  `,
  circle: (isSelected: boolean) => css`
    width: 20px;
    aspect-ratio: 1;
    border-radius: 12px;
    border: 1px solid rgba(94, 108, 132, 1);
    background-color: ${isSelected ? "rgba(94, 108, 132, 1)" : "white"};
  `,
};
