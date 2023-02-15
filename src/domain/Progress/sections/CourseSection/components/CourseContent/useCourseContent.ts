import { Unit } from "@/data/api/progress/progress.dto";
import { useGetUnit } from "@/data/api/progress/useProgressApiHooks";
import {
  CourseType,
  CourseDetailType,
} from "@/domain/Progress/types/course.type";
import { useEffect, useState } from "react";

export const useCourseContent = (models: CourseType[]) => {
  const courses = models;

  const [course, setCourse] = useState<CourseType | null>(null);
  const courseIndex = course?.index ?? 0;
  const [detailCourse, setDetailCourse] = useState<CourseDetailType | null>(
    null
  );

  const { data, mutate } = useGetUnit();
  const detailCourses = data ? data.resonseData.unitList : null;

  useEffect(() => {
    if (!courseIndex) return;

    mutate(courseIndex);
  }, [courseIndex, mutate]);

  const handleSetCourse = (selectedCourse: CourseType) => {
    setCourse(selectedCourse);
  };
  const handleSetCourseReset = () => {
    setCourse(null);
  };

  const handleSetDetailCourse = (selectedDetailCourse: CourseDetailType) => {
    setDetailCourse(selectedDetailCourse);
  };

  return {
    courseState: {
      courses: courses,
      course: course,
      onCourseClick: handleSetCourse,
    },
    detailCourseState: {
      courses: unitsToDetailCourses(detailCourses),
      course: detailCourse,
      onCourseClick: handleSetDetailCourse,
    },
    onListBack: handleSetCourseReset,
  };
};

const unitsToDetailCourses = (
  list: Unit[] | null
): CourseDetailType[] | null => {
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
