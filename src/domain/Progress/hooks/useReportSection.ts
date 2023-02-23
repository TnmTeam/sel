import { 
  useGetStudentWorkbook, 
  useGetProgressReports 
} from "@/data/api/progress/useProgressApiHooks";
import { useRecoilValue } from 'recoil';
import { courseMapState, studentMapState } from "@/common/atom/Atom";


export const useReportSection = () => {
  // const studentId = "6337a6e9f62401d9f405913c";
  // const courseId = "7dlcnlym";
  
  const currenCourseMap:any = useRecoilValue(courseMapState);
  const currenStudentMap:any = useRecoilValue(studentMapState);
  
  const studentId = currenStudentMap.lw_id;
  const courseId = currenCourseMap.course_id;

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
  //console.log("ProgressReports/workbookId(url) ", workbookId);

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

  //console.log("ProgressReports/popupList ", popupList);

  return {
    result: {
      popupList: popupList
    },
    isLoading: isLoading,
  };
}