import { axiosClient } from "@/data/client/client";
import {
  BannerResponse,
  //CourseResponse,
  CourseUnitList,
  //SuggestCourseResponse,
  SuggestCourseUnits,
  UnitResponse,
  ContentItem1,
  ContentItem2,
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

  //async getCourse(id: string): Promise<CourseResponse> {
  async getCourseUnitList(studentId: string, courseId: string): Promise<CourseUnitList> {
    //console.log("getCourseUnitList Start");
    var param = { 
        student_id : studentId, 
        course_id : courseId 
    };
    
    const response = await axiosClient.post(`/progress/course-unit-list`, param);
    //console.log("getCourseUnitList response");
    //console.log(response.data);
    return response.data;
  }

  //async getSuggestedCourse(id: string): Promise<SuggestCourseResponse> {
  async getSuggestedCourse(courseId: string): Promise<SuggestCourseUnits> {
    var param = { 
      course_id : courseId
    };
    //const response = await axiosClient.post(`/getSuggestedCourse?id=${id}`);
    const response = await axiosClient.post(`/progress/suggested-courses`, param);
    //console.log("getSuggestedCourse response");
    //console.log(response.data);
    return response.data;
  }

  //async getUnit(index: number): Promise<UnitResponse> {
  async getUnitItemList(courseId: string,sectNum: string): Promise<UnitResponse> {
    var param = { 
      course_id : courseId, 
      sect_num : sectNum 
    };
    
    const response = await axiosClient.post(`/progress/unit-item-list`, param);
    
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
  
  async getUnitItemContent1(studentId: string, courseId: string, unitId:string ): Promise<ContentItem1> {
    //console.log("getUnitItemContent1 Start");
    var param = { 
      student_id : studentId, 
      course_id : courseId, 
      unit_id : unitId 
    };
    //console.log("getUnitItemContent1 param");
    //console.log(param);
    const response = await axiosClient.post(`/progress/unit-item-responses`, param);
    //console.log("getUnitItemContent1 response");
    //console.log(response.data);
    return response.data;
  }

  async getUnitItemContent2(studentIdNum: number, unitId: string): Promise<ContentItem2> {
    //console.log("getUnitItemContent2 Start");
    var param = { 
      student_id_num : studentIdNum, 
      unit_id : unitId 
    };
    //console.log("getUnitItemContent2 param");
    //console.log(param);
    const response = await axiosClient.post(`/progress/unit-item-videoask`, param);
    //console.log("getUnitItemContent2 response");
    //console.log(response.data);
    return response.data;
  }
}

export default ProgressApiService.Instance;
