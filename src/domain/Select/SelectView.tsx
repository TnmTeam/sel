import { StudentCourseSection } from './sections';
import { useStudentList } from "./sections/StudentCourseSection/useStudentCourse";

export const SelectView = () => {
    const {studentListState} = useStudentList();
    return <StudentCourseSection data={studentListState}/>;
};


