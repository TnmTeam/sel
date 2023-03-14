import { useGetCourseProgress } from "@/data/api/overview/useOverviewApiHooks";
import { CourseItemType } from "../sections/CourseProgressSection/components/ProgressSummary/components/CourseProgress/types/CourseProgress.type";
import { useRecoilValue } from 'recoil';
import { courseMapState, studentMapState } from "@/common/atom/Atom";
import { useEffect, useState } from "react";


export const useCourseProgressSection = () => {
  
  const currenCourseMap:any = useRecoilValue(courseMapState);
  const currenStudentMap:any = useRecoilValue(studentMapState);
  
  const [courseId , setCourseId]= useState("");
  const [studentId , setStudentId]= useState("");
  useEffect(()=> {
    setCourseId(currenCourseMap.course_id);
    setStudentId(currenStudentMap.lw_id);
  },[currenCourseMap, currenStudentMap])

  const { data, isLoading } = useGetCourseProgress(studentId, courseId);
  
  if (!data) {
    return {
      courseProgressState: {
          result: null,
          isLoading: isLoading,
      },
    };
  }


  // CourseProgress
  const plain: CourseItemType[] = [];

  data.map( (it, index) => {
      plain[index] = {
        title: it.unit_title,
        progress: it.unit_progress+"%",
        time: it.time_on_unit+" Minutes",
        dept: index
      }
    }
  );

  const models = {
    title: "Course Progress",
    plain: plain
  }

  return {
    courseProgressState: {
      result: {
        models: models,
      },
      isLoading: isLoading,
    },
  };
};
