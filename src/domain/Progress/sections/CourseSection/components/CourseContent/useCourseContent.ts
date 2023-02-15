import { Unit } from "@/data/api/progress/progress.dto";
import { useGetUnit } from "@/data/api/progress/useProgressApiHooks";
import {
  CourseType,
  DetailCourseType,
} from "@/domain/Progress/types/course.type";
import { useEffect, useState } from "react";

export const useCourseContent = (models: CourseType[]) => {
  // 강의
  const courses = models;
  const [course, setCourse] = useState<CourseType | null>(null);
  const courseIndex = course?.index ?? 0;

  // 소강의
  const [detailCourse, setDetailCourse] = useState<DetailCourseType | null>(
    null
  );
  const { data, mutate } = useGetUnit();
  const detailCourses = data ? data.resonseData.unitList : null;

  // 대강의의 index 가 바뀔 때마다 소강의 api 호출
  useEffect(() => {
    if (!courseIndex) return;

    mutate(courseIndex);
  }, [courseIndex, mutate]);

  // funcstions
  const handleSetCourse = (selectedCourse: CourseType) => {
    setCourse(selectedCourse);
  };
  const handleSetCourseReset = () => {
    setCourse(null);
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
      courses: mappingToDetailCourses(detailCourses),
      course: detailCourse,
      onCourseClick: handleSetDetailCourse,
    },
    onListBack: handleSetCourseReset,
  };
};

// 소강의 대이터를 ui dto에 맞게 매핑
const mappingToDetailCourses = (
  list: Unit[] | null
): DetailCourseType[] | null => {
  if (!list) {
    return null;
  }
  const result = list.map((it) => ({
    type: it.type,
    title: it.title,
    contentType: it.contentType,
    done: it.done,
    contentUrl: it.contentUrl,
  }));

  return result;
};
