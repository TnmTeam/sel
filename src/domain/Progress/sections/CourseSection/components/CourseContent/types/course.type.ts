import {
  DetailCourseType,
  CourseType,
} from "@/domain/Progress/types/course.type";

export type CourseListLayoutType = {
  courses: CourseType[];
  onCourseClick: (v: CourseType) => void;
};

export type SelectedCourseLayoutType = {
  detailCourses: DetailCourseType[] | null;
  selectedCourse: CourseType;
  selectedDetailCourse: DetailCourseType | null;
  onListBack: () => void;
  onCourseClick: (detailCourse: DetailCourseType) => void;
};

export type CourseProgressType = {
  courseState: {
    courses: CourseType[];
    course: CourseType | null;
    onCourseClick: (selectedCourse: CourseType) => void;
  };
  detailCourseState: {
    courses: DetailCourseType[] | null;
    course: DetailCourseType | null;
    onCourseClick: (selectedDetailCourse: DetailCourseType) => void;
  };
  onListBack: () => void;
};
