export type BannerResponse = {
  impact_score: number;
  words_written: number;
  activities_completed: number;
  video_upload: number;
  hours_spent: number;
  course_title: string;
  course_completion: number;
};

export type CourseResponse = {
  resultCode: string;
  resonseData: CourseData;
};

export type SuggestCourseResponse = {
  resultCode: string;
  responseData: SuggestCourseUnits;
};

export type UnitResponse = {
  resultCode: string;
  resonseData: {
    unitList: Unit[];
  };
};


export type CourseData = {
  courseDescription: string;
  unitList: CourseUnit[];
} | null;

type CourseUnit = {
  index: number;
  title: string;
  date: number;
  progressPercent: number;
};

export type SuggestCourseUnits = {
  title: string;
  description: string;
  thumbnail: string;
}[];

export type Unit = {
  type: string;
  title: string;
  contentType: string;
  done: boolean;
  contentUrl: string;
};

export type StudentWorkbookResponse = { 
  workbook_id: string;
};

export type ProgressReportsResponse = { 
  popupList: string[];
};