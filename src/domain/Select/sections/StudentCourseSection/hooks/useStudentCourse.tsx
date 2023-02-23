import { useGetStudentList } from "@/data/api/studentCourse/useStudentCourseApiHooks";
export const useStudentSection = () => {
  
  const { data, isLoading } = useGetStudentList("josharnold@gmail.com");
  
  if (!data) {
    return {
      studentListState: {
            result: null,
            isLoading: isLoading,
        },
    };
  }
  
  let studentList = [];
  for(let i = 0 ; i < data.length ; i++){
    let student = {
      id : data[i].id,
      studentId : data[i].lw_id,
      studentName : data[i].name,
      studentEmail: data[i].name,
      parentEmail: data[i].parent_email,
      grade: data[i].grade,
      school: data[i].school,
      role: data[i].role,
      createdAt: data[i].created_at,
      lastLogin: data[i].last_login,
    };
    studentList.push(student);
  }
  
  return {
    studentListState: {
      result: {
        studentList: studentList,
      },
      isLoading: isLoading,
    },
  };
};