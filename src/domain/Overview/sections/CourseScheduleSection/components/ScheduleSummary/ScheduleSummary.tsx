import { css } from '@emotion/react';
import { Stack } from '@mui/system';
import dayjs, { Dayjs } from 'dayjs';
import { ScheduleDatePicker } from './components/ScheduleDatePicker/ScheduleDatePicker';
import { ScheduleSummaryType } from './components/ScheduleDatePicker/types/ScheduleDatePicker.type';


export const ScheduleSummary = ({picDate, changeDate, handleClickOpen}: ScheduleSummaryType) => {

    return (
            <Stack onClick={handleClickOpen}>
                <Stack css={sx.scheduleTitle}> COURSE SCHEDULE </Stack>
                <Stack css={sx.pickerTest}>
                    <ScheduleDatePicker
                        picDate={picDate}
                        changeDate={changeDate}
                        disabledYN={true}
                    />
                </Stack>
            </Stack>
    );
};

const sx = {
    scheduleTitle: css`
        position: relative;
        width: 226.27px;
        height: 39px;
        left: 20px;
        top: 35px;
        margin-bottom: 20px;
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 21px;
        letter-spacing: 0.02em;
        color: #5E6C84;
    ` ,
    pickerTest: css`
        padding: 0px;
    `

};
