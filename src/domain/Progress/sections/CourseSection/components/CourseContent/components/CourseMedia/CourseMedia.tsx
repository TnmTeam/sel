import { Stack } from "@mui/material";
import { css } from "@emotion/react";
import { ActivityContent, ReadContent, WatchContent } from "./media";
import { CourseDetailType } from "@/domain/Progress/types/course.type";

type CourseMediaType = {
  selectedDetailCourse: CourseDetailType | null;
};

export const CourseMedia = ({ selectedDetailCourse }: CourseMediaType) => {
  return (
    <Stack css={sx.mediaContainer}>
      {selectedDetailCourse &&
        getMediaCOntentByCourseType(
          selectedDetailCourse.type,
          selectedDetailCourse.contentUrl
        )}
    </Stack>
  );
};

const sx = {
  mediaContainer: css`
    width: 744px;
    height: 754px;
  `,
};

const getMediaCOntentByCourseType = (courseTitle: string, url: string) => {
  const courseType = courseTitle.substring(0, 1);

  switch (courseType) {
    case "W":
      return <WatchContent url={url} />;

    case "R":
      return <ReadContent url={url} />;

    case "A":
      return <ActivityContent />;
    default:
      return <ActivityContent />;
  }
};
