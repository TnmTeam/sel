import { Stack } from '@mui/system';
import { profileProps } from '../../ProfileSection';
import { StudentProfile } from './components';

export const StudentProfileSection = (props:profileProps) => {
    return (
        <Stack>
            <StudentProfile {...props}/>
        </Stack>
    );
};
