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
  StudentJourneyListResponse,
} from "./progress.dto";
import { StudentInfoEdit } from "@/domain/Account/sections/ProfileSection/Components/StudentProfileSection/components/StudentProfile/Components/StudentInfo/Components";

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
    var param = { 
        student_id : studentId, 
        course_id : courseId 
    };
    
    const response = await axiosClient.post(`/progress/course-unit-list`, param);
    return response.data;
  }

  async getSuggestedCourse(courseId: string): Promise<SuggestCourseUnits> {
    var param = { 
      course_id : courseId
    };
    const response = await axiosClient.post(`/progress/suggested-courses`, param);
    return response.data;
  }

  async getUnitItemList(studentIdNum:number, studentId:string, courseId: string,sectNum: string): Promise<UnitResponse> {
    var param = { 
      student_id_num : studentIdNum,
      student_id : studentId,
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
    var param = { 
      student_id : studentId, 
      course_id : courseId, 
      unit_id : unitId 
    };
    const response = await axiosClient.post(`/progress/unit-item-responses`, param);
    return response.data;
  }

  async getUnitItemContent2(studentIdNum: number, unitId: string): Promise<ContentItem2> {
    var param = { 
      student_id_num : studentIdNum, 
      unit_id : unitId 
    };
    const response = await axiosClient.post(`/progress/unit-item-videoask`, param);

    return response.data;
  }

  async getStudentSuccessJourneyList(courseId: string): Promise<StudentJourneyListResponse> {
    var param = { 
      course_id : courseId
    };
    const response = await axiosClient.post(`/progress/student-success-journey`, param);
    return response.data;
  }
}

export default ProgressApiService.Instance;
