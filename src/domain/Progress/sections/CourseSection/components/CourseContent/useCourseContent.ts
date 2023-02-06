import { useState } from "react";
import { courseModel } from "./models/course.models";
import { CourseDetailType, CourseType } from "./types/course.type";

export const useCourseContent = () => {
  const courses = courseModel;
  const [course, setCourse] = useState<CourseType | null>(null);
  const [detailCourse, setDetailCourse] = useState<CourseDetailType | null>(
    null
  );

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
      courses: detailCourse,
      course: detailCourse,
      onCourseClick: handleSetDetailCourse,
    },
    onListBack: handleSetCourseReset,
  };
};
