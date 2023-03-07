import { css } from '@emotion/react';
import { Stack } from '@mui/material';
import { ScheduleDetailPopup, ScheduleSummary } from './components';
import {useState, useEffect} from 'react';
import Dialog from '@mui/material/Dialog';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { CourseScheduleType } from '../../types/courseSchedule.type';
import { CustomProgress } from "@/common/components/progress";

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

import { OnChangeDateType } from './components/ScheduleSummary/components/ScheduleDatePicker/types/ScheduleDatePicker.type';



type DataType = {
    data: CourseScheduleType;
};

export const CourseScheduleSection = ({data}: DataType) => {

    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const handleClickOpen = () => {
        setOpen(true); 
    };
    const handleClose = () => {
        setOpen(false);
    };

/*
    const [state, setState] = useState(
        {
            startDate: new Date(data.result.dateRange.startDate),
            endDate: new Date(data.result.dateRange.endDate),
            key: "selection"
        }
    );
    
    const onChangeRange = (changeVal: OnChangeDateType) => {
        {
            setState
            (
                {
                    startDate: changeVal.startDate,
                    endDate: changeVal.endDate,
                    key: changeVal.key
                }
            ); 
        }
    }
*/

    if (!data.result || data.isLoading || !data.result.dateRange) {
        return (
            <Stack css={sx.scheduleSummaryContainer}>
                <Stack height={"452px"} justifyContent="center" alignItems={"center"}>
                    <CustomProgress />
                </Stack>
            </Stack>
        );
    }
    


    const picDate = {
        startDate: new Date(data.result.dateRange.startDate),
        endDate: new Date(data.result.dateRange.endDate),
        key: "selection"
    };
    
    const onChangeRange = (changeVal: OnChangeDateType) => {
            
    }

    


    return (
        <Stack css={sx.scheduleSummaryContainer}>
            <ScheduleSummary 
                picDate={picDate}
                changeDate={onChangeRange}
                handleClickOpen={handleClickOpen}
            />
            <Dialog
                fullScreen={fullScreen}
                maxWidth={false}
                open={open}
                onClose={handleClose}
            >
                <ScheduleDetailPopup 
                    picDate={picDate}
                    changeDate={onChangeRange}
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
        /*
        cursor: pointer;
        */
    `
};
