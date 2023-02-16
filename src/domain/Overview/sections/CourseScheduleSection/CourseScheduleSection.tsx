import { css } from '@emotion/react';
import { Stack } from '@mui/material';
import { ScheduleDetailPopup, ScheduleSummary } from './components';
import {useState} from 'react';
import Dialog from '@mui/material/Dialog';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import dayjs, { Dayjs } from 'dayjs';


export const CourseScheduleSection = () => {
    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const handleClickOpen = () => {
        setOpen(true); 
    };
    const handleClose = () => {
        setOpen(false);
    };

    const [date, setDate] = useState<Dayjs | null>(dayjs());
    const changeDate = (clickDate: dayjs.Dayjs | null) => {
        setDate(clickDate);
    }

    return (
        <Stack css={sx.scheduleSummaryContainer}>
            <ScheduleSummary 
                picDate={date}
                changeDate={changeDate}
                handleClickOpen={handleClickOpen}
            />
            <Dialog
                fullScreen={fullScreen}
                maxWidth={false}
                open={open}
                onClose={handleClose}
            >
                <ScheduleDetailPopup 
                    picDate={date}
                    changeDate={changeDate}
                    closeHandle={handleClose}
                />
            </Dialog>
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
    `
};
