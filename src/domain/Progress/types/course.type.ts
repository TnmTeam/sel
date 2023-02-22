export type CourseStateType = {
  //result: CourseData | null;
  result: CourseUnitList | null;
  isLoading: boolean;
};

//export type CourseData = {
  export type CourseUnitList = {
  courseDesc: string;
  units: CourseType[];
};

export type CourseType = {
  index: number;
  sect_num: string;
  //title: string;
  section_title: string;
  unit_item_cnt: number;
  progressPercent: number;
  //progress_percent: number;

};

export type DetailCourseType = {
  id: number;
  type: string;
  title: string;
  contentType: string;
  done: boolean;
  contentUrl: string;
  unitId: string;
};
