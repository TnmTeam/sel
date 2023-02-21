import { useMutation, useQuery } from "react-query";
import ProgressApiService from "./progress.api";

export const useGetBanner = (studentIdNumber:number, studentId: string, courseId: string) => {
  return useQuery(["banner", studentId], () => ProgressApiService.getBanner(studentIdNumber, studentId, courseId));
};

export const useGetCourse = (id: string) => {
  return useQuery(["course", id], () => ProgressApiService.getCourse(id));
};

export const useGetSuggestedCourse = (id: string) => {
  return useQuery(["suggested-course", id], () =>
    ProgressApiService.getSuggestedCourse(id)
  );
};

export const useGetUnit = () => {
  return useMutation((index: number) => ProgressApiService.getUnit(index));
};

export const useGetStudentWorkbook = (studentId: string, courseId: string) => {
  return useQuery(["student-workbook", studentId], () => ProgressApiService.getStudentWorkbook(studentId, courseId));
};

