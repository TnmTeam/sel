import { useGetBanner } from "@/data/api/progress/useProgressApiHooks";
import { useRecoilValue } from 'recoil';
import { courseMapState, studentMapState } from "@/common/atom/Atom";
import { useEffect, useState } from "react";


export const useBannerSection = () => {
  // const studentId = "636190c367b952049905f9b8";
  // const courseId = "7dlc1002";
  // const studentIdNumber = 283;
  
  const currenCourseMap:any = useRecoilValue(courseMapState);
  const currenStudentMap:any = useRecoilValue(studentMapState);
  
  const [courseId , setCourseId]= useState("");
  const [studentId , setStudentId]= useState("");
  const [studentIdNumber , setStudentIdNumber]= useState(0);
  useEffect(()=> {
    setCourseId(currenCourseMap.course_id);
    setStudentId(currenStudentMap.lw_id);
    setStudentIdNumber(currenStudentMap.id);
  },[currenCourseMap, currenStudentMap])

  const { data, isLoading } = useGetBanner(studentIdNumber, studentId, courseId);

  if (!data) {
    return {
      bannerState: {
        result: null,
        isLoading: isLoading,
      },
    };
  }

  const response = data;

  // banner
  const [title, desc, rate] = [
    response.course_title,
    "",
    response.course_completion,
  ];

  const [
    hoursSpent,
    wordsWritten,
    videosUploaded,
    attendance,
    // selfControl,
    // purpose,
    // gratitude,
    // grit,
  ] = [
    response.hours_spent,
    response.words_written,
    response.video_upload,
    response.activities_completed,
    // progressResponse?.selfControl,
    // progressResponse?.purpose,
    // progressResponse?.gratitude,
    // progressResponse?.grit,
  ];

  return {
    bannerState: {
      result: {
        banner: {
          title: title,
          desc: desc,
          rate: rate,
        },
        rates: {
          plain: {
            hoursSpent: hoursSpent,
            wordsWritten: wordsWritten,
            videosUploaded: videosUploaded,
            attendance: attendance,
          },
          // chart: {
          //   selfControl: selfControl,
          //   purpose: purpose,
          //   gratitude: gratitude,
          //   grit: grit,
          // },
        },
      },
      isLoading: isLoading,
    },
  };
};
