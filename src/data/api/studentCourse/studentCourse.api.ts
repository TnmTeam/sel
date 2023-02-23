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
    //console.log("getAppbar Student");
    //console.log(param);
    const response = await axiosClient.post(`/navigation/student-list`, param);
    //console.log("response");
    //console.log(response);
    return response.data;
  }
}

export default StudentCourseApiService.Instance;