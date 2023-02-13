import { css } from '@emotion/react';
import { Stack, Typography } from '@mui/material';

export const Banner = () => {
    return (
        <Stack css={sx.contentContainer}>
            <Typography variant='h1'>Banner</Typography>
        </Stack>
    );
};

const sx = {
    contentContainer: css``,
};
