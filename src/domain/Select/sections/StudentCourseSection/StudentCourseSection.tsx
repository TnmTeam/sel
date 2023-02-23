import { CustomProgress } from "@/common/components/progress";
import { Stack } from '@mui/material';
import { StudentItemType } from './components/types/studentCourse.type'
import { StudentCourse } from "./components/StudentCourse";

type DataType = {
    data: StudentItemType;
  };

export const StudentCourseSection = ({ data }: DataType) => {
    if (!data.result || data.isLoading) {
        return (
            <Stack height={"452px"} justifyContent="center" alignItems={"center"}>
                <CustomProgress />
            </Stack>
        );
    }
    return (
            <StudentCourse data={data.result} />
    );
};