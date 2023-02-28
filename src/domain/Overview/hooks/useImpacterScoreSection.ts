import { useGetImpacterScore } from "@/data/api/overview/useOverviewApiHooks";
import { useRecoilValue } from 'recoil';
import { courseMapState, studentMapState } from "@/common/atom/Atom";
import { useEffect, useState } from "react";

export const useImpacterScoreSection = () => {
  const currenCourseMap:any = useRecoilValue(courseMapState);
  const currenStudentMap:any = useRecoilValue(studentMapState);

  const [courseId , setCourseId]= useState("");
  const [studentId , setStudentId]= useState("");

  useEffect(()=> {
    setCourseId(currenCourseMap.course_id);
    setStudentId(currenStudentMap.lw_id);
  },[currenCourseMap, currenStudentMap])

  const { data, isLoading } = useGetImpacterScore(studentId, courseId);

  
  if (!data) {
    return {
        impacterSocreState: {
            result: null,
            isLoading: isLoading,
        },
    };
  }
  
  // impacterSocre
  const [studentName, rate, url] = [
    data?.name,
    data?.impacter_socre,
    data?.media,
  ];
  
  return {
    impacterSocreState: {
      result: {
        impacterScore: {
            rate: rate * 10,
            studentName: studentName,
            url: url,
        },
      },
      isLoading: isLoading,
    },
  };
};
