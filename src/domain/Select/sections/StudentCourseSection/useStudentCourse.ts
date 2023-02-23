import { useStudentSection } from "./hooks/useStudentCourse";

export const useStudentList = () => {
  const { studentListState } = useStudentSection();

  return {
    studentListState: studentListState,
  };
};