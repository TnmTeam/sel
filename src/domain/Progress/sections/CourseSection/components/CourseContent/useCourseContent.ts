import { useGetUnitItem } from "@/data/api/progress/useProgressApiHooks";
import { UnitItem } from "@/data/api/progress/progress.dto";
import {
  CourseType,
  DetailCourseType,
} from "@/domain/Progress/types/course.type";
import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { courseMapState, studentMapState } from "@/common/atom/Atom";
import { focusInfo } from "@/common/atom/Atom";

export const useCourseContent = (models: CourseType[]) => {
  
  const currenCourseMap:any = useRecoilValue(courseMapState);
  const currenStudentMap:any = useRecoilValue(studentMapState);
  const focusState:any = useSetRecoilState(focusInfo);

  const [courseId , setCourseId]= useState("");
  const [studentId , setStudentId]= useState("");
  const [studentIdNumber , setStudentIdNumber]= useState(0);
  useEffect(()=> {
    setCourseId(currenCourseMap.course_id);
    setStudentId(currenStudentMap.lw_id);
    setStudentIdNumber(currenStudentMap.id);
    setCourse(null);
    setDetailCourse(null);
  },[currenCourseMap, currenStudentMap])

  // 강의
  const courses = models;
  const [course, setCourse] = useState<CourseType | null>(null);
  const courseIndex = course?.index ?? 0;

  const sectNum       = course?.sect_num ?? '';

  // 소강의
  const [detailCourse, setDetailCourse] = useState<DetailCourseType | null>(
    null
  );
  const { data, mutate } = useGetUnitItem(studentIdNumber, studentId, courseId, sectNum);
  const detailCourses = data ? data.unitList : null;

  // 대강의의 index 가 바뀔 때마다 소강의 api 호출
  useEffect(() => {
      if (!courseIndex) return;
      mutate();
      // 포커스 초기화
      focusState({});
  }, [courseIndex, mutate]);

  // funcstions
  const handleSetCourse = (selectedCourse: CourseType) => {
    setCourse(selectedCourse);
  };
  const handleSetCourseReset = () => {
    setCourse(null);
    setDetailCourse(null);
  };

  const handleSetDetailCourse = (selectedDetailCourse: DetailCourseType) => {
    setDetailCourse(selectedDetailCourse);
  };

  return {
    courseState: {
      courses: courses,
      course: course,
      onCourseClick: handleSetCourse,
    },
    detailCourseState: {
      courses: mappingToDetailCourses(detailCourses, studentId, courseId, studentIdNumber, sectNum),
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
