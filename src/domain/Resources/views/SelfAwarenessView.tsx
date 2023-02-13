import { css } from '@emotion/react';
import { Stack } from '@mui/material';
import Image from 'next/image';
import ResourcesCircleImage from '@/assets/overview/img-background.png';
import { SelfAwarenessSection } from '../sections';

export const SelfAwarenessView = () => {
    return (
        <Stack css={sx.sample}>
            <SelfAwarenessSection />
        </Stack>
    );
};

const sx = {
    sample: css``,
};
