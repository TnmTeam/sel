import { ShorthandPropertyAssignment } from "typescript";

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

export type CourseDetailType = {
  type: string;
  title: string;
  contentType: string;
  done: boolean;
  contentUrl: string;
};
