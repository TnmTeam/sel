export type BannerResponse = {
  resultCode: string;
  responseData: BannerData;
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
