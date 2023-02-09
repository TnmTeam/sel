import { css } from '@emotion/react';
import { Stack } from '@mui/system';
import { ScheduleDatePicker, SchedulePopupButton } from './components';


export const ScheduleSummary = () => {
    // 달력에 지정할 날짜
    // 
    const model = {
        ScheduleDatePicker: {
            // startDate: "2023-02-07",
            // endDate: "2023-02-10",
            picDate: "2023-02-14",
            detailList: [
                {
                    title: "Lesson 2 Due", 
                    date: "2023-02-14", 
                    time: "9:00am"
                },
                {
                    title: "Lesson 3 Due", 
                    date: "2023-02-14", 
                    time: "9:00am"
                },
                {
                    title: "Lesson 4 Due", 
                    date: "2023-02-14", 
                    time: "9:00am"
                }
            ]
        },
    };
    return (
        <Stack css={sx.scheduleSummaryContainer} >
            <SchedulePopupButton 
                picDate={model.ScheduleDatePicker.picDate}
                detailList={model.ScheduleDatePicker.detailList}
            />
            <Stack css={sx.pickerTest}>
                <ScheduleDatePicker
                    picDate={model.ScheduleDatePicker.picDate}
                />
            </Stack>
        </Stack>
    );
};

const sx = {
    scheduleSummaryContainer: css`
        position: absolute;
        width: 376.47px;
        height: 427px;
        left: 677.19px;
        top: 723px;
        background: #FFFFFF;
        border-radius: 28px;
    `
    ,
    pickerTest: css`
        padding: 25px;

    `
};
