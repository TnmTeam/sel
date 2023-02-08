import { css } from '@emotion/react';
import { Stack } from '@mui/system';
import { ScheduleDetailBoxType } from './types/ScheduleDetailBox.type';

export const ScheduleDetailBox = ({title, time}: ScheduleDetailBoxType) => (
    <Stack css={sx.scheduleBoxText}>
        <Stack css={sx.title}> {title} </Stack>
        <Stack css={sx.time}> {time} </Stack>
        <Stack css={sx.scheduleBoxLine}></Stack>
    </Stack>
);

const sx = {
    scheduleBoxText: css`
        position: relative;
        box-sizing: border-box;
        width: 327.23px;
        height: 76.59px;
        background: #FFFFFF;
        border: 0.50502px solid #979797;
        border-radius: 5.0502px;

        margin-bottom: 20px;
    `,
    scheduleBoxLine: css`
        position: absolute;    
        width: 7px;
        height: 75.59px;
        background: #147AD6;
        border-radius: 5.0502px;

        margin-bottom: 20px;
    `,
    title: css`
        position: absolute;
        left: 5%;
        top: 30%;
        font-family: 'Plus Jakarta Sans';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 18px;
        color: #000000;
    `,
    time: css`
        position: absolute;
        left: 5%;
        top: 60%;
        font-family: 'Plus Jakarta Sans';
        font-style: normal;
        font-weight: 500;
        font-size: 13px;
        line-height: 16px;
        color: #757575;
    `
};
