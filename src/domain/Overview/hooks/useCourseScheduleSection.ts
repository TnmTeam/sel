import { useGetCourseSchedule } from "@/data/api/overview/useOverviewApiHooks";
import { useRecoilValue } from 'recoil';
import { courseMapState, studentMapState } from "@/common/atom/Atom";
import { useEffect, useState } from "react";


export const useCourseScheduleSection = () => {

  const currenCourseMap:any = useRecoilValue(courseMapState);
  // const courseId = currenCourseMap.course_id;

  const [courseId , setCourseId]= useState("");
  useEffect(()=> {
    setCourseId(currenCourseMap.course_id);
  },[currenCourseMap])



  const { data, isLoading } = useGetCourseSchedule(courseId);
  
  if (!data) {
    return {
        courseScheduleState: {
            result: null,
            isLoading: isLoading,
        },
    };
  }
  
  // CourseSchedule date range
  const [startDate, endDate] = [
    data?.start_date,
    data?.end_date
  ];
  

  // console.log("startDate ", startDate);
  // console.log("startDate() ", new Date(startDate));
  // console.log("endDate ", endDate);
  
  return {
    courseScheduleState: {
      result: {
        dateRange: {
            startDate: startDate,
            endDate: endDate,
        },
      },
      isLoading: isLoading,
    },
  };
};
