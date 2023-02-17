export type ImpacterScoreType = {
    result: ImpacterType | null;
    isLoading: boolean;
};

export type ImpacterType = {
    impacterScore: ChartType;
};

export type ChartType = {
    rate: number;
    studentName: String;
    url: string;
};
