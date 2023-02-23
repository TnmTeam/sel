import { useMutation, useQuery } from "react-query";
import ProgressApiService from "./progress.api";

export const useGetBanner = (studentIdNumber:number, studentId: string, courseId: string) => {
  return useQuery(["banner", studentId], () => ProgressApiService.getBanner(studentIdNumber, studentId, courseId));
};

//export const useGetCourse = (id: string) => {
export const useGetCourseUnitList = (studentId: string, courseId: string) => {
  //return useQuery(["course", id], () => ProgressApiService.getCourse(id));
  return useQuery(["course-unit-list", studentId], () => ProgressApiService.getCourseUnitList(studentId, courseId));
};

export const useGetSuggestedCourse = (courseId: string) => {
  return useQuery(["suggested-courses", courseId], () =>
    ProgressApiService.getSuggestedCourse(courseId)
  );
};

//export const useGetUnit = () => {
export const useGetUnitItem = (courseId: string, sectNum: string) => {
  //var courseId = (sectNum.substring(0, sectNum.indexOf( "_" )));
  //return useMutation((index: number) => ProgressApiService.getUnit(index));
  return useMutation(["unit-item-list", sectNum], () => ProgressApiService.getUnitItemList(courseId, sectNum));
};

export const useGetUnitItemContent1 = (studentId: string, courseId: string, unitId: string) => {
  return useQuery(["unit-item-responses", unitId], () => ProgressApiService.getUnitItemContent1(studentId, courseId, unitId));
};

export const useGetUnitItemContent2 = (studentIdNum: number, unitId: string) => {
  return useQuery(["unit-item-videoask", unitId], () => ProgressApiService.getUnitItemContent2(studentIdNum, unitId));
};

export const useGetStudentWorkbook = (studentId: string, courseId: string) => {
  return useQuery(["student-workbook", studentId], () => ProgressApiService.getStudentWorkbook(studentId, courseId));
};

export const useGetProgressReports = (studentId: string, courseId: string) => {
  return useQuery(["progress-reports", studentId], () => ProgressApiService.getProgressReports(studentId, courseId));
};

export const useGetStudentSuccessJourney = (courseId: string) => {
  return useQuery(["student-journey", courseId], () =>  ProgressApiService.getStudentSuccessJourneyList(courseId)
  );
};
