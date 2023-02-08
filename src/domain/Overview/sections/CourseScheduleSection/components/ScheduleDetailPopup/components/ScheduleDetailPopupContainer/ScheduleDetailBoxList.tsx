import { css } from '@emotion/react';
import { Stack } from '@mui/system';
import { ScheduleDetailBox } from './ScheduleDetailBox';
import { ScheduleDetailBoxType } from './types/ScheduleDetailBox.type';
import dayjs, { Dayjs } from 'dayjs';

export const ScheduleDetailBoxList = ({picDate, detailList}: ScheduleDetailBoxType) => {
    
    const date = dayjs(picDate);
    console.log(picDate)
    console.log(date);
    const dayName = dayjs(date).format("dddd");
    const dayNumber = dayjs(date).format("D");


    return (
        <Stack css={sx.scheduleDetailList}>
            <Stack css={sx.scheduleBox}>
                <Stack css={sx.popupDate}>
                    {dayNumber} {dayName}
                </Stack>

                {detailList.map((item, index) => (
                    <ScheduleDetailBox
                        key={index}
                        title={item.title}
                        time={item.time}
                    />
                ))}

                {/* <ScheduleDetailBox 
                    title={"test title 1"}
                    date={"2023-02-08"}
                />
                <ScheduleDetailBox 
                    title={"test title 2"}
                    date={"2023-02-08"}
                />
                <ScheduleDetailBox 
                    title={"test title 3"}
                    date={"2023-02-08"}
                /> */}

            </Stack>
        </Stack>
    );
};


const sx = {
    scheduleBox: css`
        position: sticky;
        left: 471.53px;
        margin-bottom: 20px;
    `,
    popupDate: css`
        height: 108px;
        
        padding-top: 35px; 
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 31px;
        letter-spacing: 0.02em;
        color: #0A0B26;
    `,
    scheduleDetailList: css`
        align-items: center;
        width: 100%;
        /*
        margin-top: 108px;
        */
    `
};
