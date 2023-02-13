import { css } from '@emotion/react';
import { Stack, Typography } from '@mui/material';

export const VideosToWatch = () => {
    return (
        <Stack css={sx.contentContainer}>
            <Typography variant='h1'>VideosToWatch</Typography>
        </Stack>
    );
};

const sx = {
    contentContainer: css``,
};
