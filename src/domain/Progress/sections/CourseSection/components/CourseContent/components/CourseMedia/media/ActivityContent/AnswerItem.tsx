import { Colors } from "@/common/themes/Color";
import { Stack, Typography } from "@mui/material";

type AnswerItemType = {
  title: string;
  answer: string;
};

export const AnswerItem = ({ title, answer }: AnswerItemType) => {
  return (
    <Stack>
      <Typography
        variant="body2"
        fontWeight={400}
        color={Colors.BasicText}
        letterSpacing="0.02em"
      >
        {title}
      </Typography>
      <Typography
        variant="body2"
        fontWeight={700}
        color={Colors.BasicText}
        letterSpacing="0.02em"
      >
        {answer}
      </Typography>
    </Stack>
  );
};
