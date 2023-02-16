export type CourseStateType = {
  result: CourseData | null;
  isLoading: boolean;
};

export type CourseData = {
  courseDesc: string;
  units: CourseType[];
};

export type CourseType = {
  title: string;
  date: number;
  progressPercent: number;
  index: number;
};

export type DetailCourseType = {
  id: number;
  type: string;
  title: string;
  contentType: string;
  done: boolean;
  contentUrl: string;
};
