import { Colors } from "@/common/themes/Color";
import { css } from '@emotion/react';
import { Stack, Typography } from "@mui/material";

type AnswerItemType = {
  question: string;
  answer: string;
};

export const AnswerItem = ({ question, answer }: AnswerItemType) => {
  return (
    <Stack style={{wordBreak: 'break-word'}} >
      <Typography
        variant="h6"
        fontWeight={'bold'}
        color="#1B2137"
        sx={{ opacity: "0.7" }}
      >
        {'Question'}
      </Typography>
        <div dangerouslySetInnerHTML={ {__html: question} } css={sx.questionAnswer} ></div>
      <Typography
        variant="h6"
        fontWeight={'bold'}
        color={Colors.CompeleteGreen}
        sx={{ opacity: "0.7" }}
      >
        {'Answer'}
      </Typography>
        <div dangerouslySetInnerHTML={ {__html: answer} } css={sx.questionAnswer} ></div>
      <Typography
        sx={{borderBottom: 1}}
      >
      </Typography>
    </Stack>
  );
};

const sx = {
  questionAnswer: css`
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    color: {Colors.BasicText};
    letter-spacing: 0.02em;
    margin-bottom: 10px;
  `,
};
