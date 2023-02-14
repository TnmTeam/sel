import { css } from '@emotion/react';
import { Stack } from '@mui/system';
import { ScheduleContainer } from './components';

export const ScheduleSummary = () => {
    // 달력에 지정할 날짜
    //
    const model = {
        ScheduleDatePicker: {
            // startDate: "2023-02-07",
            // endDate: "2023-02-10",
            picDate: '2023-02-14',
            detailList: [
                {
                    title: 'Lesson 2 Due',
                    date: '2023-02-14',
                    time: '9:00am',
                },
                {
                    title: 'Lesson 3 Due',
                    date: '2023-02-14',
                    time: '9:00am',
                },
                {
                    title: 'Lesson 4 Due',
                    date: '2023-02-14',
                    time: '9:00am',
                },
            ],
        },
    };
    return (
        <Stack css={sx.scheduleSummaryContainer}>
            <ScheduleContainer
                picDate={model.ScheduleDatePicker.picDate}
                detailList={model.ScheduleDatePicker.detailList}
            />
        </Stack>
    );
};

const sx = {
    scheduleSummaryContainer: css`
        position: absolute;
        width: 376.47px;
        height: 427px;
        left: 679px;
        background: #ffffff;
        border-radius: 28px;
        cursor: pointer;
    `,
};
