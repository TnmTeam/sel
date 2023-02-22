export type CourseProgressType = {
    result: CourseType | null;
    isLoading: boolean;
};

export type CourseType = {
    impacterScore: ChartType;
};

export type ChartType = {
    rate: number;
    studentName: String;
    url: string;
};
