import { 
  useGetStudentWorkbook, 
  useGetProgressReports 
} from "@/data/api/progress/useProgressApiHooks";
import { useRecoilValue } from 'recoil';
import { courseMapState, studentMapState } from "@/common/atom/Atom";
import { useEffect, useState } from "react";


export const useReportSection = () => {
  // const studentId = "6337a6e9f62401d9f405913c";
  // const courseId = "7dlcnlym";
  
  const currenCourseMap:any = useRecoilValue(courseMapState);
  const currenStudentMap:any = useRecoilValue(studentMapState);
  
  const [courseId , setCourseId]= useState("");
  const [studentId , setStudentId]= useState("");
  useEffect(()=> {
    setCourseId(currenCourseMap.course_id);
    setStudentId(currenStudentMap.lw_id);
  },[currenCourseMap, currenStudentMap])

  return {
    reportState:{
      progressReportsState: useGetProgressReportsState(studentId, courseId),
      recentUploadsState: null,
      studentWrokbookState: useStudentWrokbookState(studentId, courseId)
    }
  };


};


const useStudentWrokbookState = (studentId: string, courseId: string) => {
  const { data, isLoading } = useGetStudentWorkbook(studentId, courseId);
  
  if (!data) {
    return {
      result: null,
      isLoading: isLoading,
    };
  }

  const response = data;

  
  // workbook
  const workbookId = response?.workbook_id;
  
  return {
    result: {
      workbookId: workbookId
    },
    isLoading: isLoading,
  };
}


const useGetProgressReportsState = (studentId: string, courseId: string) => {
  const { data, isLoading } = useGetProgressReports(studentId, courseId);
  
  if (!data) {
    return {
      result: null,
      isLoading: isLoading,
    };
  }

  const popupList = data;

  return {
    result: {
      popupList: popupList
    },
    isLoading: isLoading,
  };
}