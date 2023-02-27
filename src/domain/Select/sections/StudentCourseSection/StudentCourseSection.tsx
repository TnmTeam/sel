import { CustomProgress } from '@/common/components/progress';
import { Stack, Button } from '@mui/material';
import Link from 'next/link';
import { StudentItemType } from './components/types/studentCourse.type';
import { StudentCourse } from './components/StudentCourse';
import { FlexBlueButtons, WhiteButtons } from '@/common/themes/Color';

type DataType = {
    data: StudentItemType;
};

export const StudentCourseSection = ({ data }: DataType) => {
    if (
        data.result?.studentList.length != undefined &&
        0 < data.result?.studentList.length
    ) {
        return <StudentCourse data={data.result} />;
    } else if (!data.result || data.isLoading) {
        return (
            <Stack
                height={'452px'}
                justifyContent='center'
                alignItems={'center'}
            >
                <CustomProgress />
            </Stack>
        );
    } else {
        return (
            <Stack sx={{ position:'absolute', top:'30%', left:'40%', fontSize:'20pt', textAlign:'center'}}>
                No students have been assigned to you.
                <Link
                    id='loginBtn'
                    type='submit'
                    href='/'
                    style={{ textDecoration: 'none' }}
                >
                    <Button
                        type='submit'
                        fullWidth
                        variant='contained'
                        sx={{
                            mt: 3,
                            mb: 2,
                            fontSize: '12pt',
                            width: '300px',
                            background: FlexBlueButtons.ButtonColor,
                            color: FlexBlueButtons.TextColor,
                            ':hover': {
                                background: FlexBlueButtons.onHoverButtonColor,
                                color: FlexBlueButtons.OnHoverTextColor,
                            },
                        }}
                    >
                        Go to Login Page 
                    </Button>
                </Link>
            </Stack>
        );
    }
};
