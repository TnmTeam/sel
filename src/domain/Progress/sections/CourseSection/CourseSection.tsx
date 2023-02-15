import { CustomProgress } from "@/common/components/progress";
import { Colors } from "@/common/themes/Color";
import { css } from "@emotion/react";
import { CircularProgress, Skeleton, Stack } from "@mui/material";
import { CourseStateType } from "../../types/course.type";
import { CourseContent, CourseDescription } from "./components";

type DataType = {
  data: CourseStateType;
};

export const CourseSection = ({ data }: DataType) => {
  if (!data.result || data.isLoading) {
    return (
      <Stack css={sx.root} justifyContent="center" alignItems={"center"}>
        <CircularProgress />
      </Stack>
    );
  }

  return (
    <Stack css={sx.root}>
      <CourseDescription description={data.result.courseDesc!!} />
      <CourseContent models={data.result.units} />
    </Stack>
  );
};

const sx = {
  root: css`
    width: 100%;
    background-color: ${Colors.FlexBlue};
    padding: 36px 65px 53px 65px;
  `,
};
