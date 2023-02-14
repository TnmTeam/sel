import {
  CourseDetailType,
  CourseType,
} from "@/domain/Progress/types/course.type";

export type CourseListLayoutType = {
  courses: CourseType[];
  onCourseClick: (v: CourseType) => void;
};

export type SelectedCourseLayoutType = {
  detailCourses: CourseDetailType[] | null;
  selectedCourse: CourseType;
  selectedDetailCourse: CourseDetailType | null;
  onListBack: () => void;
  onCourseClick: (detailCourse: CourseDetailType) => void;
};

export type CourseProgressType = {
  courseState: {
    courses: CourseType[];
    course: CourseType | null;
    onCourseClick: (selectedCourse: CourseType) => void;
  };
  detailCourseState: {
    courses: CourseDetailType[] | null;
    course: CourseDetailType | null;
    onCourseClick: (selectedDetailCourse: CourseDetailType) => void;
  };
  onListBack: () => void;
};
