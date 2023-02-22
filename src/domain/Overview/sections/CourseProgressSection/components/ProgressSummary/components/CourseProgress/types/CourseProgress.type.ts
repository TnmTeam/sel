export type CourseProgressType = {
    title: string;
    plain: CourseItemType[];
};

export type CourseItemType = {
    title: string;
    progress: string;
    time: string;
    dept: number;
  };