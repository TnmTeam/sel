import { css } from '@emotion/react';
import { Box, Stack } from '@mui/system';
import Grid from '@mui/material/Unstable_Grid2';
import { StudentInfo } from './Components';
import { ProfilePhotoSection } from '../../..';
import { profileProps } from '../../../../ProfileSection';

export const StudentProfile = (props:profileProps) => {
    return <Stack css={sx.sample}>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
                <Grid xs>
                    <ProfilePhotoSection
                        {...props}
                    />
                </Grid>
                <Grid xs={9}>
                    <StudentInfo
                        {...props}
                    />
                </Grid>
            </Grid>
        </Box>
    </Stack>;
};

const sx = {
    sample: css`
        min-height: 400px;
        position: relative;
        overflow: hidden;
    `,
};
