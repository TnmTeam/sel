import { css } from '@emotion/react';
import { Stack } from '@mui/material';
import { ImpacterScoreSection } from '../sections';

export const OverviewView = () => {
    return (
        <Stack css={sx.sample}>
            <ImpacterScoreSection />
        </Stack>
    );
};

const sx = {
    sample: css`
        height: 100%;
        position: relative;
        overflow: hidden;
        background-color: black;
    `,
};
