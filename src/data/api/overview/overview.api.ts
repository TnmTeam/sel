import { axiosClient } from "@/data/client/client";
import {
  ImpacterScoreResponse,
  CourseScheduleResponse,
  CourseProgressResponse,
} from "./overview.dto";

class OverviewApiService {
  private static instance: OverviewApiService;
  static get Instance(): OverviewApiService {
    return this.instance || (this.instance = new this());
  }

  async getImpacterScore(studentId: string, courseId: string): Promise<ImpacterScoreResponse> {

    console.log( "=====");
    console.log( studentId);
    console.log( courseId);
    var param = { 
      student_id : studentId, 
      course_id : courseId 
    };
    
    const response = await axiosClient.post(`/overview/impacter-score`, param);
    //console.log("response");
    //console.log(response);
    return response.data;
  }

  async getCourseSchedule(courseId: string) : Promise<CourseScheduleResponse> {
    var param = { 
      course_id : courseId 
    };
    const response = await axiosClient.post(`/overview/course-schedule`, param);

    return response.data;
  }

  async getCourseProgress(studentId: string, courseId: string) : Promise<CourseProgressResponse> {
    var param = { 
      student_id : studentId,
      course_id : courseId 
    };
    const response = await axiosClient.post(`/overview/course-progress`, param);

    return response.data;
  }

}

export default OverviewApiService.Instance;
