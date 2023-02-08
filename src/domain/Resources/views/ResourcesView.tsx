import { css } from '@emotion/react';
import { Stack } from '@mui/material';
import Image from 'next/image';
import ResourcesCircleImage from '@/assets/overview/img-background.png';
import { ResourcesDescriptionSection } from '../sections';

export const ResourcesView = () => {
    return (
        <Stack css={sx.sample}>
            <ResourcesDescriptionSection />
        </Stack>
    );
};

const sx = {
    sample: css``,
};
