import { css } from '@emotion/react';
import { Stack } from '@mui/system';
import { ScheduleDatePickerType } from './types/ScheduleDatePicker.type';

import {useState} from 'react';
import dayjs, { Dayjs } from 'dayjs';
import Grid from '@mui/material/Grid';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { CalendarPicker } from '@mui/x-date-pickers/CalendarPicker';


export const ScheduleDatePicker = ({picDate, changeDate, disabledYN}: ScheduleDatePickerType) => {
    
    const [date, setDate] = useState<Dayjs | null>(dayjs());
    // const [disabledVal, setDisabledVal] = useState(disabledYN);

    return (
        <Stack>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <CalendarPicker 
                    date={picDate} 
                    onChange={
                        (newDate) => {
                            setDate(newDate); 
                            changeDate(newDate);
                        }
                    } 
                    disabled={disabledYN}
                />
            </LocalizationProvider>
        </Stack> 
    );
};

const sx = {
    sample: css`
        
    `
};
