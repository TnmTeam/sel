export type BannerResponse = {
  impact_score: number;
  words_written: number;
  activities_completed: number;
  video_upload: number;
  hours_spent: number;
};

export type CourseResponse = {
  resultCode: string;
  //resonseData: CourseData;
  resonseData: CourseUnitList;
};

export type SuggestCourseResponse = {
  resultCode: string;
  responseData: SuggestCourseUnits;
};
/*
export type UnitResponse = {
  resultCode: string;
  resonseData: {
    unitList: Unit[];
  };
};
*/
export type UnitResponse = {
  unitList: UnitItem[];
};
export type BannerData = {
  courseMainTitle: string;
  courseSubTitle: string;
  courseProgressPercent: number;
  courseProgressItem: {
    hoursSpent: number;
    wordsWritten: number;
    videosUploaded: number;
    attendance: number;
    selfControl: number;
    purpose: number;
    gratitude: number;
    grit: number;
  };
} | null;

//export type CourseData = {
export type CourseUnitList = {
    courseDescription: string;
    unitList: CourseUnit[];
} | null;

type CourseUnit = {
  index: number;
  sect_num: string;
  //title: string;
  section_title: string;
  unit_item_cnt: number;
  progressPercent: number;
  //progress_percent: number | 60;
};

export type SuggestCourseUnits = {
  id: number;
  course_title: string;
  //description: string;
  //thumbnail: string;
  course_thumbnail: string;
  course_description: string;
  number_in_sequence: number;
  course_family: string;
}[];
/*
export type Unit = {
  type: string;
  title: string;
  contentType: string;
  done: boolean;
  contentUrl: string;
};
*/
export type UnitItem = {
    id: number;
    title: string;
    type: string;
    contentType: string;
    done: boolean;
    unit_num: string;
    sect_num: string;
    course_id: string;
    field_label: string;
    keep_data: boolean;
    course_link: string;
    unit_id: string | 'A01';
};

export type ContentResponse1 = {
  contentList: ContentItem1[];
};

export type ContentItem1 = {
  id: 2449;
  student_id: string;
  course_id: string;
  unit_id: string;
  response_id: string;
  block_id: string;
  type: string;
  question: string;
  answer: string;
  created_at: string;
};

export type ContentResponse2 = {
  contentList: ContentItem2[];
};

export type ContentItem2 = {
  id: 2449;
  student_id: string;
  course_id: string;
  unit_id: string;
  response_id: string;
  block_id: string;
  type: string;
  course_link: string;
};

export type StudentWorkbookResponse = { 
  workbook_id: string;
};