import { Colors } from "@/common/themes/Color";
import { Stack, Typography } from "@mui/material";

type AnswerItemType = {
  question: string;
  answer: string;
};

export const AnswerItem = ({ question, answer }: AnswerItemType) => {
  return (
    <Stack style={{wordBreak:"break-all"}}>
      <Typography
        variant="body2"
        fontWeight={700}
        color={Colors.BasicText}
        letterSpacing="0.02em"
      >
        {question}
      </Typography>
      <Typography
        variant="body2"
        fontWeight={400}
        color={Colors.BasicText}
        letterSpacing="0.02em"
      >
        {answer}
      </Typography>
    </Stack>
  );
};
