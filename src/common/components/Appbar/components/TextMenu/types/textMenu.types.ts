export type TextMenuType = {
    url: string;
    currentRoute: string;
    title: string;
    buttonType: string;
};

export type StudentCourseListType = {
    StudentCourseList: StudentCourseItemType[];
};

export type StudentCourseItemType = {
    Student: string;
    Course: CourseItemType[];
};

export type CourseItemType = {
    Course: string;
};
