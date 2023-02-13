import { axiosClient } from "@/data/client/client";
import { BannerResponse } from "./progress.dto";

class ProgressApiService {
  private static instance: ProgressApiService;
  static get Instance(): ProgressApiService {
    return this.instance || (this.instance = new this());
  }

  async getBanner(id: string): Promise<BannerResponse> {
    const response = await axiosClient.post(`/getBanner?id=${id}`);

    return response.data;
  }
}

export default ProgressApiService.Instance;
