import { css } from '@emotion/react';
import { Stack } from '@mui/material';
import Image from 'next/image';
import OverViewBackgroundImage from '@/assets/overview/img-background.png';
import {
    CourseProgressSection,
    ImpacterScoreSection,
    CourseScheduleSection,
} from '../sections';
import { FeaturedImpactorVideosSection } from '../sections';
import { SelfScoresSection } from '../sections';

export const OverviewView = () => {
    return (
        <Stack css={sx.overviewContainer}>
            <ImpacterScoreSection />
            <Stack direction={'row'} css={sx.CourseContainer}>
                <CourseProgressSection />
                <CourseScheduleSection />
            </Stack>
            <SelfScoresSection />
            <FeaturedImpactorVideosSection />
        </Stack>
    );
};

const sx = {
    overviewContainer: css`
        height: 100%;
        position: relative;
        overflow: hidden;
        background-color: #4a7199;
    `,
    backgroundImage: css`
        position: absoulte;
        top: 0;
        left: 0;
    `,

    CourseContainer: css`
        width: 100%;
        height: 470px;
        background: #4a7199;
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
