import { useGetUnitItem } from "@/data/api/progress/useProgressApiHooks";
import { UnitItem } from "@/data/api/progress/progress.dto";
import {
  CourseType,
  DetailCourseType,
} from "@/domain/Progress/types/course.type";
import { useEffect, useState } from "react";
import { useRecoilValue } from 'recoil';
import { courseMapState, studentMapState } from "@/common/atom/Atom";

export const useCourseContent = (models: CourseType[]) => {
  
  const currenCourseMap:any = useRecoilValue(courseMapState);
  const currenStudentMap:any = useRecoilValue(studentMapState);

  const studentId     = currenStudentMap.lw_id;
  const courseId      = currenCourseMap.course_id;
  const studentIdNum  = currenStudentMap.id;

  // 강의
  const courses = models;
  const [course, setCourse] = useState<CourseType | null>(null);
  const courseIndex = course?.index ?? 0;

  const sectNum       = course?.sect_num ?? '';

  // 소강의
  const [detailCourse, setDetailCourse] = useState<DetailCourseType | null>(
    null
  );
  const { data, mutate } = useGetUnitItem(studentIdNum, studentId, courseId, sectNum);
  const detailCourses = data ? data.unitList : null;

  // 대강의의 index 가 바뀔 때마다 소강의 api 호출
  useEffect(() => {
      //console.log("useCourseContent useEffect courseIndex : "+courseIndex);
      if (!courseIndex) return;
      //console.log("useCourseContent useEffect courseIndex2 : "+courseIndex);
      //console.log("useCourseContent useEffect sectNum : "+sectNum);
      mutate();
      //console.log("useEffect data");
      //console.log(data);
  }, [courseIndex, mutate]);

  // funcstions
  const handleSetCourse = (selectedCourse: CourseType) => {
    //console.log("useCourseContent handleSetCourse selectedCourse");
    //console.log(selectedCourse);
    setCourse(selectedCourse);
  };
  const handleSetCourseReset = () => {
    //console.log("useCourseContent handleSetCourseReset");
    setCourse(null);
  };

  const handleSetDetailCourse = (selectedDetailCourse: DetailCourseType) => {
    //console.log("useCourseContent handleSetDetailCourse selectedDetailCourse");
    //console.log(selectedDetailCourse);
    setDetailCourse(selectedDetailCourse);
  };

  return {
    courseState: {
      courses: courses,
      course: course,
      onCourseClick: handleSetCourse,
    },
    detailCourseState: {
      courses: mappingToDetailCourses(detailCourses, studentId, courseId, studentIdNum, sectNum),
      course: detailCourse,
      onCourseClick: handleSetDetailCourse,
    },
    onListBack: handleSetCourseReset,
  };
};

// 소강의 대이터를 ui dto에 맞게 매핑
const mappingToDetailCourses = (
  list: UnitItem[] | null, studentId:string, courseId:string, studentIdNum:number, sectNum:string
): DetailCourseType[] | null => {
  //console.log("mappingToDetailCourses list");
  //console.log(list);
  if (!list) {
    return null;
  }
  
  const result = list.map((it, index) => ({
    id: it.id,
    type: it.type,
    title: it.title,
    contentType: it.contentType,
    done: it.keep_data,
    contentUrl: it.course_link,
    unitId: it.unit_id,
    studentId: studentId,
    courseId: courseId,
    studentIdNum: studentIdNum,
    sectNum: sectNum,
  }));

  return result;
};
