import { css } from '@emotion/react';
import { Box, Stack } from '@mui/system';
import Grid from '@mui/material/Unstable_Grid2';
import { ProfilePhotoSection } from '../../..';
import { GuardianInfo } from './Components';
import { profileProps } from '../../../../ProfileSection';

export const GuardianProfile = (props:profileProps) => {
    return <Stack css={sx.sample}>
    <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
            <Grid xs>
                <ProfilePhotoSection
                    {...props}
                />
            </Grid>
            <Grid xs={9}>
                <GuardianInfo 
                    {...props}
                />
            </Grid>
        </Grid>
    </Box>
</Stack>;
};

const sx = {
    sample: css`
        height: 452px;
        position: relative;
        overflow: hidden;
    `,
};
