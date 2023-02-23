import { Colors } from "@/common/themes/Color";
import { css } from "@emotion/react";
import { Stack, Typography } from "@mui/material";
import { AnswerItem } from "./AnswerItem";
import { ContentItem1 } from "@/domain/Progress/types/course.type";

type DataType = {
  models: ContentItem1|undefined;
};

export const ActivityContent = ({ models }: DataType) => {
  //export const ActivityContent = () => {
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
          {models?.map((it, index) => (
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
