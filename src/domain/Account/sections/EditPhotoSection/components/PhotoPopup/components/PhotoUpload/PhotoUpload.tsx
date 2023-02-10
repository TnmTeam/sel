import { useState, useRef, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

export const PhotoUpload = () => {

    return (
        <Box sx={{ width: '280px', height: '280px', border: '1px dashed black', borderRadius: '140px', margin: 'auto', position: 'relative', marginTop: '30px', background: '#F7F7F7' }}>
            <Typography component='h1' variant='h4' sx={{color: '#979797', position: 'absolute', top: '105px', left: 'calc(50% - 80px)'}}>
                Drag Photo
            </Typography>
            <Typography component='h1' variant='h4' sx={{color: '#979797', position: 'absolute', top: '150px', left: 'calc(50% - 35px)'}}>
                Here
            </Typography>
        </Box>
    );
}