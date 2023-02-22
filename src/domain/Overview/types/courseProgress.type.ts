import { CourseProgressType } from "../sections/CourseProgressSection/components/ProgressSummary/components/CourseProgress/types/CourseProgress.type";

export type CourseProgressApiType = {
    result: CourseProgressApiData | null;
    isLoading: boolean;
};

export type CourseProgressApiData = {
    models: CourseProgressType;
};

