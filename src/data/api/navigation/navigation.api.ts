import { axiosClient } from "@/data/client/client";
import {
  NotificationPopupResponse,
} from "./navigation.dto";

class NavigationApiService {
  private static instance: NavigationApiService;
  static get Instance(): NavigationApiService {
    return this.instance || (this.instance = new this());
  }

  async getNotificationPopup(studentId: string, courseId: string) : Promise<NotificationPopupResponse> {
    var param = { 
      student_id : studentId,
      course_id : courseId 
    };
    const response = await axiosClient.post(`/navigation/notifications-popup`, param);

    return response.data;
  }
}

export default NavigationApiService.Instance;
