export type JourneyItemType = {
  result: JourneyListType | null;
  isLoading: boolean;
};

export type JourneyListType = {
  journeyList: JourneyType[];
};

export type JourneyType = {
  id : number;
  courseTitle : string;
  courseDescription : string;
  courseThumbnail: string;
  numberInSequence: number;
  courseFamily: string;
  isHere: boolean;
};