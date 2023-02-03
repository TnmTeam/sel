import { Stack, Typography } from "@mui/material";
import { CourseType } from "../../../course.type";
import { css } from "@emotion/react";
import Image from "next/image";
import NextButton from "@/assets/progress/icon/ic-next.svg";
import { Colors } from "@/common/themes/Color";

type CourseListLayoutProps = {
  courses: CourseType[];
  onCourseClick: () => void;
};

export const CourseListLayout = ({
  courses,
  onCourseClick,
}: CourseListLayoutProps) => {
  return (
    <Stack css={sx.courseListLayout}>
      {courses.map((it, index) => (
        <Stack key={index} direction="row" css={sx.courseItem}>
          <Typography
            variant="caption"
            width="78px"
            textAlign="center"
            css={sx.text}
          >
            {it.process + "%"}
          </Typography>
          <Typography variant="body2" width="247px" css={sx.text}>
            {it.dayTitle}
          </Typography>
          <Stack direction="row" alignItems={"center"}>
            <Typography variant="caption" width="73px" css={sx.text}>
              {it.date}
            </Typography>
            <Image width={12} height={20} src={NextButton} alt={"next"} />
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
};

const sx = {
  courseListLayout: css`
    width: 100%;
    height: 664px;
  `,
  courseItem: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 80px;
    padding-right: 17.32px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.11);
    cursor: pointer;

    &:hover {
      transition: 0.3s;
      background-color: ${Colors.FlexBlue};
    }
  `,
  text: css`
    color: #0a0b26;
    font-weight: 500;
    line-height: 1;
    letter-spacing: 0.02em;
  `,
};
