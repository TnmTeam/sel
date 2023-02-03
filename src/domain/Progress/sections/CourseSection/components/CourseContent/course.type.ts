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
