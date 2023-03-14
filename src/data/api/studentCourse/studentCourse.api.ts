import { axiosClient } from "@/data/client/client";
import { StudentListResponse} from "./studentCourse";

class StudentCourseApiService {
  
  private static instance: StudentCourseApiService;
  static get Instance(): StudentCourseApiService {
    return this.instance || (this.instance = new this());
  }

  async getStudentList(parentEmail: string): Promise<StudentListResponse> {

    var param = { 
      parent_email : parentEmail
    };
    const response = await axiosClient.post(`/navigation/student-list`, param);
    return response.data;
  }

  async getCourseList(studentId: string): Promise<StudentListResponse> {
    var param = { 
      student_id : studentId
    };
    const response = await axiosClient.post(`/navigation/course-list`, param);
    return response.data;
  }
}

export default StudentCourseApiService.Instance;