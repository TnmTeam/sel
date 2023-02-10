import { css } from '@emotion/react';
import { Stack } from '@mui/system';
import { CourseProgress } from './components';

export const ProgressSummary = () => {
    const model = {
        CourseProgress: {
            title: 'Course Progress',
            plain: [
                {
                    title: 'Start Task',
                    date: '19 Jan',
                    time: '45 Minutes',
                    dept: 2,
                },
                {
                    title: 'Workbook',
                    date: '20 ~ 21 Jan',
                    time: '3 Hours',
                    dept: 1,
                },
                { title: 'Video', date: '22 Jan', time: '50 Minutes', dept: 0 },
            ],
        },
    };
    return (
        <Stack>
            <CourseProgress
                title={model.CourseProgress.title}
                plain={model.CourseProgress.plain}
            />
        </Stack>
    );
};

const sx = {};
