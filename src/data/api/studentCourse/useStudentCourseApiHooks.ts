import { useQuery } from "react-query";
import StudentCourseApiService from "./studentCourse.api";

export const useGetStudentList = (parentEmail: string) => {
  return useQuery(["student-list", parentEmail], () => StudentCourseApiService.getStudentList(parentEmail));
};