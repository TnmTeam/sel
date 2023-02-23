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
  studentId: string;
  courseId: string;
  studentIdNum: number;
  sectNum: string;
};

export type ContentResponse1 = {
  contentList: ContentItem1[];
} | null;

export type ContentItem1 = {
  id: number;
  student_id: string;
  course_id: string;
  unit_id: string;
  response_id: string;
  block_id: string;
  type: string;
  question: string;
  answer: string;
  created_at: string;
} | null;
