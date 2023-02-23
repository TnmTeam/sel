import { useMutation, useQuery } from "react-query";
import AccountApiService from "./account.api";

export const useGetStudentProfile = (parentEmail: string) => {
    return useQuery(['profile-student', parentEmail], () => AccountApiService.getStudentProfile(parentEmail));
  };
