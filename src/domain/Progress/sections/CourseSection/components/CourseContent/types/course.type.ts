export type CourseListLayoutType = {
  courses: CourseType[];
  onCourseClick: (v: CourseType) => void;
};

export type SelectedCourseLayoutType = {
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
    course: CourseDetailType | null;
    onCourseClick: (selectedDetailCourse: CourseDetailType) => void;
  };
  onListBack: () => void;
};

export type CourseType = {
  dayTitle: string;
  date: string;
  process: number;
  courseDetailList: CourseDetailType[];
};

export type CourseDetailType = {
  title: string;
  iconType: any;
  isCompleted: boolean;
};
