export type StudentItemType = {
    result: StudentListType | null;
    isLoading: boolean;
};

export type StudentListType = {
    studentList: StudentType[]
};

export type StudentType = {
    id : number,
    studentId : string,
    studentName : string,
    studentEmail: string,
    parentEmail: string,
    grade: string,
    school: string,
    role: string,
    createdAt: string,
    lastLogin: string,
};

export type StudentList2Type = {
    studentList: StudentType2[]
};

export type StudentType2 = {
    id: number,
    lw_id: string,
    name: string,
    email: string | null,
    parent_email: string | null,
    parent_name: string | null,
    parent_phone: string | null,
    parent_email2: string | null,
    parent_name2: string | null,
    parent_phone2: string | null,
    grade: string | null,
    school: string | null,
    role: string | null,
    created_at: string | null,
    last_login: string | null,
    folder_id: string | null,
    courses_list: CourseListType[] | null
};

export type CourseListType = {
    id: number,
    created_at: string | null,
    student_id: string,
    course_id: string,
    workbook_id: string | null,
    video_link: string | null,
    title: string | null
};