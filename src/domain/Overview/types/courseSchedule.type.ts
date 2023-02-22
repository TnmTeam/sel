export type CourseScheduleType = {
    result: CourseScheduleData | null;
    isLoading: boolean;
};

export type CourseScheduleData = {
    dateRange: DateRangeData | null;
};

export type DateRangeData = {
    startDate: string;
    endDate: string;
};
