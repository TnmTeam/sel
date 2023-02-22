import { Stack } from '@mui/system';
import { profileProps } from '@/domain/Account/sections/ProfileSection/ProfileSection';
import { StudentInfoEdit, StudentInfoView } from './Components';

export const StudentInfo = (props: profileProps) => {
    const {isEdit} = props;
    const model = props.infomation;

    return (
        <>
            <Stack
                justifyContent="center"
                minHeight="400px"
            >
                {
                    !isEdit ?
                    <StudentInfoView 
                        email={''}
                        {...model}
                    />
                    :
                    <StudentInfoEdit 
                        email={''}
                        {...model}
                    />
                }
            </Stack>
        </>
    );
}