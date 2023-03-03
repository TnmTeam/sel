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