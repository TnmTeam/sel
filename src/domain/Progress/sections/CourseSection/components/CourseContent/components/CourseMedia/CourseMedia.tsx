import { Stack } from "@mui/material";
import { css } from "@emotion/react";
import { ActivityContent, ReadContent, WatchContent } from "./media";
import { DetailCourseType } from "@/domain/Progress/types/course.type";
import { useEffect, useState } from "react";
import { ContentResponse1, ContentResponse2 } from "@/data/api/progress/progress.dto";
import { useGetUnitItemContent1, useGetUnitItemContent2 } from "@/data/api/progress/useProgressApiHooks";

var studentIdNum  = 0;
var studentId     = '';
var courseId      = '';
var sectNum       = '';
var unitIds       = '';

type CourseMediaType = {
  selectedDetailCourse: DetailCourseType | null;
};

export const CourseMedia = ({ selectedDetailCourse }: CourseMediaType) => {

  if(selectedDetailCourse) {
    studentIdNum  = selectedDetailCourse.studentIdNum;
    studentId     = selectedDetailCourse.studentId;
    courseId      = selectedDetailCourse.courseId;
    sectNum       = selectedDetailCourse.sectNum;
  }

  return (
    <Stack css={sx.mediaContainer}>
      {selectedDetailCourse &&
        getMediaContentByCourseType(
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

const getMediaContentByCourseType = (type: string, unitId: string) => {
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
  //console.log("CourseMedia getMediaContentByCourseType studentIdNum : "+studentIdNum);
  //console.log("CourseMedia getMediaContentByCourseType studentId : "+studentId);
  //console.log("CourseMedia getMediaContentByCourseType courseId : "+courseId);
  //console.log("CourseMedia getMediaContentByCourseType unitId : "+unitIds);
  if(type) {
    switch (type) {
      //case "embed":
      //  console.log("CourseMedia getMediaContentByCourseType type : "+type);
      //  var data2 = useGetUnitItemContent2(studentIdNum, unitIds);
      //  console.log("CourseMedia getMediaContentByCourseType embed data2");
      //  console.log(data2);
        //return <WatchContent url={url} />;
      case "assessmentV2":
        //console.log("CourseMedia getMediaContentByCourseType type : "+type);
        //const data = useGetUnitItemContent1(studentId, courseId, unitIds);
        //console.log("CourseMedia getMediaContentByCourseType assessmentV2 data");
        //console.log(useGetUnitItemContent1(studentId, courseId, unitIds));
        //return <ActivityContent models={data1} />;
        return <ActivityContent />;
      default:
        //console.log("CourseMedia getMediaContentByCourseType type : "+type);
        //var data3 = useGetUnitItemContent1(studentId, courseId, unitIds);
        //console.log("CourseMedia getMediaContentByCourseType default data3");
        //console.log(data3);
        //return <ActivityContent models={data1} />;
        return <ActivityContent />;
    }
  }
};
