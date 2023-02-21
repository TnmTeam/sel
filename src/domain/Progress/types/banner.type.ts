export type BannerStateType = {
  result: BannerData | null;
  isLoading: boolean;
};

export type BannerData = {
  banner: BannerType;
  rates: RateType;
};

export type BannerType = {
  title: string;
  desc: string;
  rate: number;
};

export type RateType = {
  plain: PlainRateType;
  // chart: ChartRateType;
};

export type PlainRateType = {
  hoursSpent: number;
  wordsWritten: number;
  videosUploaded: number;
  attendance: number;
};

export type ChartRateType = {
  selfControl: number;
  purpose: number;
  gratitude: number;
  grit: number;
};

export type RepoertStateType = {
  progressReportsState: any;
  recentUploadsState: any;
  studentWrokbookState: StudentWorkbookType;
};

export type StudentWorkbookType = {
  result: StudentWorkbookData | null;
  isLoading: boolean;
};

export type StudentWorkbookData ={
  workbookId: string;
};
