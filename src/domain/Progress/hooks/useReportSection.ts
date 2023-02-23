import { 
  useGetStudentWorkbook, 
  useGetProgressReports 
} from "@/data/api/progress/useProgressApiHooks";

const studentId = "636190c367b952049905f9b8";
const courseId = "7dlc1002";

export const useReportSection = () => {
  return {
    reportState:{
      progressReportsState: useGetProgressReportsState(),
      recentUploadsState: null,
      studentWrokbookState: useStudentWrokbookState()
    }
  };


};


const useStudentWrokbookState = () => {
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


const useGetProgressReportsState = () => {
  const { data, isLoading } = useGetProgressReports(studentId, courseId);
  
  if (!data) {
    return {
      result: null,
      isLoading: isLoading,
    };
  }

  const popupList = data;

  // console.log("list rsp ", popupList);

  return {
    result: {
      popupList: popupList
    },
    isLoading: isLoading,
  };
}