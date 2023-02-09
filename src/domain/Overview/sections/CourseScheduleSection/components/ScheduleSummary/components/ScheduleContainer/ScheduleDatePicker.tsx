import { css } from '@emotion/react';
import { Stack } from '@mui/system';
import { ScheduleDatePickerType } from './types/ScheduleDatePicker.type';

import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import Grid from '@mui/material/Grid';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { CalendarPicker } from '@mui/x-date-pickers/CalendarPicker';


export const ScheduleDatePicker = ({picDate}: ScheduleDatePickerType) => {

    const [date, setDate] = React.useState<Dayjs | null>(dayjs(picDate));

    return (
        <Stack>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <CalendarPicker date={date} onChange={(newDate) => setDate(newDate)} />
                </Grid>
                </Grid>
            </LocalizationProvider>
        </Stack> 
    );
};

const sx = {
    sample: css`
        
    `
};
