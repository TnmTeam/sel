//import { Unit } from "@/data/api/progress/progress.dto";
//import { useGetUnit } from "@/data/api/progress/useProgressApiHooks";
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

  var studentId     = currenStudentMap.lw_id;
  var courseId      = currenCourseMap.course_id;
  var studentIdNum  = currenStudentMap.id;
  var sectNum       = '';

  // 강의
  const courses = models;
  const [course, setCourse] = useState<CourseType | null>(null);
  const courseIndex = course?.index ?? 0;

  // 소강의
  const [detailCourse, setDetailCourse] = useState<DetailCourseType | null>(
    null
  );
  const { data, mutate } = useGetUnitItem(courseId, sectNum);
  const detailCourses = data ? data.unitList : null;

  // 대강의의 index 가 바뀔 때마다 소강의 api 호출
  useEffect(() => {
      //console.log("useCourseContent useEffect courseIndex : "+courseIndex);
      if (!courseIndex) return;
      //console.log("useCourseContent useEffect courseIndex2 : "+courseIndex);
      mutate();
      //console.log("useEffect data");
      //console.log(data);
  }, [courseIndex, mutate]);

  // funcstions
  const handleSetCourse = (selectedCourse: CourseType) => {
    //console.log("useCourseContent handleSetCourse selectedCourse");
    //console.log(selectedCourse);
    sectNum  = selectedCourse.sect_num;
    //console.log("useCourseContent handleSetDetailCourse sectNum : "+sectNum);
    setCourse(selectedCourse);
    //console.log("useCourseContent handleSetCourse course");
    //console.log(course);
  };
  const handleSetCourseReset = () => {
    //console.log("useCourseContent handleSetCourseReset");
    sectNum   = '';
    setCourse(null);
  };

  const handleSetDetailCourse = (selectedDetailCourse: DetailCourseType) => {
    console.log("useCourseContent handleSetDetailCourse selectedDetailCourse");
    console.log(selectedDetailCourse);
    setDetailCourse(selectedDetailCourse);
  };

  return {
    courseState: {
      courses: courses,
      course: course,
      onCourseClick: handleSetCourse,
    },
    detailCourseState: {
      courses: mappingToDetailCourses(detailCourses),
      course: detailCourse,
      onCourseClick: handleSetDetailCourse,
    },
    onListBack: handleSetCourseReset,
  };
};

// 소강의 대이터를 ui dto에 맞게 매핑
const mappingToDetailCourses = (
  list: UnitItem[] | null
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
  }));

  return result;
};
