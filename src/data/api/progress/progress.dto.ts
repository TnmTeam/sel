export type BannerResponse = {
  resultCode: string;
  responseData: {
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
  };
};
