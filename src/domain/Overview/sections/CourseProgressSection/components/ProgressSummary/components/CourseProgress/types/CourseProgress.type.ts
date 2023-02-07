export type CourseProgressType = {
    title: string;
    plain: CourseItemType[];
};

export type CourseItemType = {
    title: string;
    date: string;
    time: string;
    dept: number;
  };