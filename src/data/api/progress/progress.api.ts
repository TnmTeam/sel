import { axiosClient } from "@/data/client/client";
import {
  BannerResponse,
  CourseResponse,
  SuggestCourseResponse,
  UnitResponse,
  StudentWorkbookResponse,
  ProgressReportsResponse,
} from "./progress.dto";

class ProgressApiService {
  private static instance: ProgressApiService;
  static get Instance(): ProgressApiService {
    return this.instance || (this.instance = new this());
  }

  async getBanner(studentIdNumber: number, studentId: string, courseId: string): Promise<BannerResponse> {
    var param = { 
      student_id_number : studentIdNumber,
      student_id : studentId, 
      course_id : courseId 
    };
    const response = await axiosClient.post(`/progress/banner`, param);

    return response.data;
  }

  async getCourse(id: string): Promise<CourseResponse> {
    const response = await axiosClient.post(`/getCourse?id=${id}`);

    return response.data;
  }

  async getSuggestedCourse(id: string): Promise<SuggestCourseResponse> {
    const response = await axiosClient.post(`/getSuggestedCourse?id=${id}`);

    return response.data;
  }

  async getUnit(index: number): Promise<UnitResponse> {
    const response = await axiosClient.post(`/getUnit?index=${index}`);

    return response.data;
  }

  async getStudentWorkbook(studentId: string, courseId: string) : Promise<StudentWorkbookResponse> {
    var param = { 
      student_id : studentId, 
      course_id : courseId 
    };
    const response = await axiosClient.post(`/progress/student-workbook`, param);

    return response.data;
  }

  async getProgressReports(studentId: string, courseId: string) : Promise<ProgressReportsResponse> {
    var param = { 
      student_id : studentId, 
      course_id : courseId 
    };
    const response = await axiosClient.post(`/progress/progress-reports`, param);

    return response.data;
  }
}

export default ProgressApiService.Instance;
