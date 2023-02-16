export type SuggestStateType = {
  result: CardType[] | null;
  isLoading: boolean;
};

export type CardType = {
  title: string;
  desc: string;
  image: string;
};
