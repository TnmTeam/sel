import { Stack } from '@mui/system';
import { profileProps } from '../../ProfileSection';
import { GuardianProfile } from './components';

export const GuardianProfileSection = (props:profileProps) => {
    return (
        <Stack>
            <GuardianProfile {...props}/>
        </Stack>
    );
};
