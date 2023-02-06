import { Stack } from '@mui/material';
import { ScheduleDetailPopup, ScheduleSummary } from './components';

export const CourseScheduleSection = () => {
    return (
        <Stack>
            <ScheduleSummary />
            <ScheduleDetailPopup />
        </Stack>
    );
};
