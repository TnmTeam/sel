import { useMutation, useQuery } from "react-query";
import OverviewApiService from "./overview.api";

export const useGetImpacterScore = (studentId: string, courseId: string) => {
  return useQuery(["impacter-score", studentId, courseId], () => OverviewApiService.getImpacterScore(studentId, courseId));
};

export const useGetCourseSchedule = (courseId: string) => {
  return useQuery(["course-schedule", courseId], () => OverviewApiService.getCourseSchedule(courseId));
};

export const useGetCourseProgress = (studentId: string, courseId: string) => {
  return useQuery(["course-progress", studentId, courseId], () => OverviewApiService.getCourseProgress(studentId, courseId));
};
