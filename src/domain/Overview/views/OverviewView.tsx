import { css } from '@emotion/react';
import { Stack } from '@mui/material';
import Image from 'next/image';
import OverViewBackgroundImage from '@/assets/overview/img-background.png';
import { ImpacterScoreSection } from '../sections';
import { FeaturedImpactorVideosSection } from '../sections';

export const OverviewView = () => {
    return (
        <Stack css={sx.overviewContainer}>
            <OverViewImage />
            <ImpacterScoreSection />
            <FeaturedImpactorVideosSection />
        </Stack>
    );
};

const sx = {
    overviewContainer: css`
        height: 100%;
        position: relative;
        overflow: hidden;
        background-color: black;
    `,
    backgroundImage: css`
        position: absoulte;
        top: 0;
        left: 0;
    `,
};

const OverViewImage = () => (
    <Stack css={sx.backgroundImage}>
        <Image
            objectFit='cover'
            src={OverViewBackgroundImage}
            alt={'overview'}
        />
    </Stack>
);
