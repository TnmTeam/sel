import { useGetStudentProfile } from "@/data/api/account/useAccountApiHooks";

export const useProfileSection = (parentEmail: string) => {
  const { data, isLoading } = useGetStudentProfile(parentEmail);

  if(!data) {
    return [];
  } else {
    return data;
  }
};
