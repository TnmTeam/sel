export type ImpacterScoreResponse = {
    name: string;
    impacter_socre: number;
    media: string;
};

export type CourseScheduleResponse = {
    start_date: string;
    end_date: string;
};

export type CourseProgressResponse = {
    unit_title: string;
    unit_progress: number;
    time_on_unit: number;
}[];

