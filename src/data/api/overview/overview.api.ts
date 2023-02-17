import { axiosClient } from "@/data/client/client";
import {
  ImpacterScoreResponse,
} from "./overview.dto";

class OverviewApiService {
  private static instance: OverviewApiService;
  static get Instance(): OverviewApiService {
    return this.instance || (this.instance = new this());
  }

  async getImpacterScore(studentId: string, courseId: string): Promise<ImpacterScoreResponse> {

    var param = { 
      student_id : studentId, 
      course_id : courseId 
    };
    console.log("getImpacterScore");
    console.log(param);
    const response = await axiosClient.post(`/overview/impacter-score`, param);
    console.log("response");
    console.log(response);
    return response.data;
  }
}

export default OverviewApiService.Instance;
