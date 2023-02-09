import { css } from '@emotion/react';
import { Stack } from '@mui/system';

import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { ScheduleDetailBoxType } from '../../../ScheduleDetailPopup/components/ScheduleDetailPopupContainer/types/ScheduleDetailBox.type';
import { ScheduleDetailPopup } from '@/domain/Overview/sections/CourseScheduleSection/components/ScheduleDetailPopup/ScheduleDetailPopup';


export const SchedulePopupButton = ({picDate, detailList}: ScheduleDetailBoxType) => {

    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Stack>
            <Stack css={sx.scheduleTitle} onClick={handleClickOpen}> COURSE SCHEDULE </Stack>
            <Dialog
                fullScreen={fullScreen}
                maxWidth={false}
                open={open}
                onClose={handleClose}
            >
                <ScheduleDetailPopup 
                    picDate={picDate}
                    detailList={detailList}
                    closeHandle={handleClose}
                />
            </Dialog>
        </Stack>
    );
};

const sx = {
    scheduleTitle: css`
        position: relative;
        width: 226.27px;
        height: 39px;
        left: 24.07px;
        top: 25px;
        margin-bottom: 20px;
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 21px;
        letter-spacing: 0.02em;
        color: #5E6C84;
        cursor: pointer;
    `
};
