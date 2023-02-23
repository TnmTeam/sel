import { Stack } from "@mui/material";
import { css } from "@emotion/react";
import { ActivityContent, ReadContent, WatchContent } from "./media";
import { DetailCourseType } from "@/domain/Progress/types/course.type";
//import { useGetUnitItemContent1, useGetUnitItemContent2 } from "@/data/api/progress/useProgressApiHooks";
import { useState } from "react";
import { useRecoilValue } from 'recoil';
import { courseMapState, studentMapState } from "@/common/atom/Atom";

var studentIdNum  = 283;
var studentId     = '636190c367b952049905f9b8';
var courseId      = '7dlc1002';
var sectNum       = '7dlc1002_S0';
var unitIds       = '';

type CourseMediaType = {
  selectedDetailCourse: DetailCourseType | null;
};

export const CourseMedia = ({ selectedDetailCourse }: CourseMediaType) => {
  return (
    <Stack css={sx.mediaContainer}>
      {selectedDetailCourse &&
        getMediaCOntentByCourseType(
          selectedDetailCourse.type,
          selectedDetailCourse.unitId

        )}
    </Stack>
  );
};

const sx = {
  mediaContainer: css`
    flex: 1;
    height: 754px;
  `,
};

const getMediaCOntentByCourseType = (type: string, unitId: string) => {
  //const courseType = courseTitle.substring(0, 1);
  /*
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
  */
  unitIds = unitId
  console.log("CourseMedia getMediaCOntentByCourseType type : "+type);
  console.log("CourseMedia getMediaCOntentByCourseType unitId : "+unitIds);
  switch (type) {
    case "embed":
      //const { data, isLoading } = useGetUnitItemContent2(studentIdNum, unitId);
      //return <WatchContent url={url} />;
    case "assessmentV2":
      //mutate();
      return <ActivityContent />;

    default:
      return <ActivityContent />;
  }
};
