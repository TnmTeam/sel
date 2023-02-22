import { CourseProgressApiType } from '@/domain/Overview/types/courseProgress.type';
import { css } from '@emotion/react';
import { Stack } from '@mui/system';
import { CourseProgress } from './components';


type  DataType = {
    data: CourseProgressApiType;
}
export const ProgressSummary = ({data}: DataType) => {
    /*
    const model = {
        CourseProgress: {
            title: 'Course Progress',
            plain: [
                {
                    title: 'Start Task',
                    // date: '19 Jan',
                    progress: '19 Jan',
                    time: '45 Minutes',
                    dept: 2,
                },
                {
                    title: 'Workbook',
                    progress: '20 ~ 21 Jan',
                    time: '3 Hours',
                    dept: 1,
                },
                { title: 'Video', progress: '22 Jan', time: '50 Minutes', dept: 0 },

                // {
                //     title: '',
                //     progress: '',
                //     time: '',
                //     dept: 1,
                // }
            ],
        },
    };
    */

    return (
        <Stack>
            <CourseProgress
                data={data}
            />
        </Stack>
    );
};

const sx = {};
