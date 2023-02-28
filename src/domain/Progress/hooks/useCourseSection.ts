//import { useGetCourse } from "@/data/api/progress/useProgressApiHooks";
import { useGetCourseUnitList } from "@/data/api/progress/useProgressApiHooks";
import { useRecoilValue } from 'recoil';
import { courseMapState, studentMapState } from "@/common/atom/Atom";
import { useEffect, useState } from "react";

export const useCourseSection = () => {
  const currenCourseMap:any = useRecoilValue(courseMapState);
  const currenStudentMap:any = useRecoilValue(studentMapState);

  const [courseId , setCourseId]= useState("");
  const [studentId , setStudentId]= useState("");
  useEffect(()=> {
    setCourseId(currenCourseMap.course_id);
    setStudentId(currenStudentMap.lw_id);
  },[currenCourseMap, currenStudentMap])
  
  const { data, isLoading } = useGetCourseUnitList(studentId, courseId);

  if (!data) {
    return {
      courseState: {
        result: null,
        isLoading: isLoading,
      },
    };
  }
  //const response = data.resonseData!!;

  //const [courseDesc, units] = [response.courseDescription, response.unitList];
  const [courseDesc, units] = [data.courseDescription, data.unitList];
  //console.log("useCourseSection courseDesc "+courseDesc);
  //console.log("useCourseSection units ");
  //console.log(units);
  return {
    courseState: {
      result: {
        courseDesc: courseDesc,
        units: units,
      },
      isLoading: isLoading,
    },
  };
};
