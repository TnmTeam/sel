import { css } from '@emotion/react';
import { Box, Stack } from '@mui/system';
import Grid from '@mui/material/Unstable_Grid2';
import { ProfilePhotoSection } from '../../..';
import { ParentInfo } from './Components';
import { profileProps } from '../../../../ProfileSection';

export const ParentProfile = (props:profileProps) => {
    return <Stack css={sx.sample} justifyContent="center">
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
                <Grid xs>
                    <ProfilePhotoSection
                        {...props}
                    />
                </Grid>
                <Grid xs={9}>
                    <ParentInfo 
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
