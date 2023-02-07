import { css } from '@emotion/react';
import { Stack } from '@mui/material';
import { AddInsightsSection } from '../sections';

export const Navigation = () => {
    return (
        <Stack css={sx.sample}>
            <AddInsightsSection />
        </Stack>
    );
};

export const AddInsights = () => {
    return (
        <Stack css={sx.sample}>
            <AddInsightsSection />
        </Stack>
    );
};

const sx = {
    sample: css``,
};
