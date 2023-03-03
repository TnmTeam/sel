import { useQuery } from "react-query";
import StudentCourseApiService from "./studentCourse.api";

export const useGetStudentList = (parentEmail: string) => {
  return useQuery(["student-list", parentEmail], () => StudentCourseApiService.getStudentList(parentEmail));
};

export const useGetCourseList = (studentId: string) => {
   return useQuery(["course-list", studentId], () => StudentCourseApiService.getCourseList(studentId));
};