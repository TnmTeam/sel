import { Stack } from '@mui/system';
import { profileProps } from '../../ProfileSection';
import { ParentProfile } from './components';

export const ParentProfileSection = (props:profileProps) => {
    return (
        <Stack>
            <ParentProfile {...props}/>
        </Stack>
    );
};
