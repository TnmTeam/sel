export type SuggestStateType = {
  result: CardType[] | null;
  isLoading: boolean;
};

export type CardType = {
  id: number;
  courseTitle: string;
  courseThumbnail: string;
  courseDescription: string;
  numberInSequence: number;
  courseFamily: string;
};
