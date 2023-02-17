import { useMutation, useQuery } from "react-query";
import OverviewApiService from "./overview.api";

export const useGetImpacterScore = (studentId: string, courseId: string) => {
    return useQuery(["impacter-score", studentId], () => OverviewApiService.getImpacterScore(studentId, courseId));
  };
