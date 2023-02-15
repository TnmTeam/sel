import { axiosClient } from "@/data/client/client";
import {
  BannerResponse,
  CourseResponse,
  SuggestCourseResponse,
  UnitResponse,
} from "./progress.dto";

class ProgressApiService {
  private static instance: ProgressApiService;
  static get Instance(): ProgressApiService {
    return this.instance || (this.instance = new this());
  }

  async getBanner(id: string): Promise<BannerResponse> {
    const response = await axiosClient.post(`/getBanner?id=${id}`);

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
}

export default ProgressApiService.Instance;
