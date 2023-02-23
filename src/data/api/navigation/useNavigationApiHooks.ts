import { useMutation, useQuery } from "react-query";
import OverviewApiService from "./navigation.api";


export const useGetNotificationPopup = (studentId: string, courseId: string) => {
  return useQuery(["notifications-popup", studentId], () => OverviewApiService.getNotificationPopup(studentId, courseId));
};
