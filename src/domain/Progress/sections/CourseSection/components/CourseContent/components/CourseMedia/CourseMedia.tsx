import { Stack } from "@mui/material";
import { css } from "@emotion/react";
import { ActivityContent, ReadContent, WatchContent } from "./media";
import { CourseDetailType } from "../../types/course.type";

type CourseMediaType = {
  selectedDetailCourse: CourseDetailType | null;
};

export const CourseMedia = ({ selectedDetailCourse }: CourseMediaType) => {
  return (
    <Stack css={sx.mediaContainer}>
      {selectedDetailCourse &&
        getMediaCOntentByCourseType(selectedDetailCourse.title)}
    </Stack>
  );
};

const sx = {
  mediaContainer: css`
    width: 744px;
    height: 754px;
  `,
};

const getMediaCOntentByCourseType = (courseTitle: string) => {
  const courseType = courseTitle.substring(0, 1);

  switch (courseType) {
    case "W":
      return <WatchContent />;

    case "R":
      return <ReadContent />;

    case "A":
      return <ActivityContent />;
    default:
      return <ActivityContent />;
  }
};
