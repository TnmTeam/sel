import { css } from '@emotion/react';
import { Stack } from '@mui/material';
import {
    CourseProgressSection,
    ImpacterScoreSection,
    CourseScheduleSection,
} from '../sections';
import { FeaturedImpactorVideosSection } from '../sections';
import { useOverView } from './useOverView';
import { useRecoilValue } from 'recoil';
import { IntercomBoot } from '@/pages/_app';
import { studentMapState } from '@/common/atom/Atom';
import { useEffect, useState } from 'react';
import { CustomProgress } from '@/common/components/progress';

export const OverviewView = () => {
    const currenStudentMap: any = useRecoilValue(studentMapState);

    const [studentName, setStudentName] = useState('');
    useEffect(() => {
        setStudentName(currenStudentMap.name);
    }, [currenStudentMap]);

    IntercomBoot(studentName);

    const { impacterSocreState, courseScheduleState, courseProgressState } =
        useOverView();

    return (
        <Stack css={sx.overviewContainer}>
            <ImpacterScoreSection data={impacterSocreState} />
            <Stack direction={'row'} css={sx.CourseContainer}>
                <CourseProgressSection data={courseProgressState} />
                <CourseScheduleSection data={courseScheduleState} />

                {/* <FeaturedStudentWorkSection /> */}
                <LinkContainer />
            </Stack>
            {/*
            <SelfScoresSection />
            */}
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

    FeaturedContainer1: (displayFlag: boolean) => css`
        position: absolute;
        width: 289px;
        height: 427px;
        right: 59px;
        background: #ffffff;
        border-radius: 28px;
        display: ${displayFlag ? 'none' : ''};
    `,
    FeaturedContainer2: (displayFlag: boolean) => css`
        position: absolute;
        width: 289px;
        height: 427px;
        right: 59px;
        background: #ffffff;
        border-radius: 28px;
        display: ${displayFlag ? '' : 'none'};
    `,
    CircleOut: css`
        position: absolute;
        width: 80px;
        height: 80px;
        left: 200.22px;
        top: 265.5px;
        color: #fff;
    `,
    CircleIn: css`
        position: absolute;
        width: 65px;
        height: 65px;
        left: 207.72px;
        top: 273px;
        color: #6787b7;
    `,
    SendIcon: css`
        position: absolute;
        width: 25px;
        height: 25px;
        left: 230px;
        top: 292px;
        transform: matrix(0.74, -0.67, 0.65, 0.76, 0, 0);
        color: #fff;
    `,
    FavoriteIcon: css`
        width: 250px;
        height: 250px;
        position: absolute;
        left: 6.5%;
        top: 22%;
        color: #ea4848;
    `,
    comingSoon: css`
        background: rgba(0, 0, 0, 0.7);
        font-size: 40px;
        color: white;
        position: absolute;
        width: 289px;
        line-height: 427px;
        border-radius: 26px;
        z-index: 999;
        text-align: center;
    `,
};

const LinkContainer = () => {
    const [displayFlag, setDisplayFlag] = useState(false);
    setTimeout(() => setDisplayFlag(true), 1000);

    return (
        <>
            <Stack css={sx.FeaturedContainer1(displayFlag)}>
                <Stack
                    height={'452px'}
                    justifyContent='center'
                    alignItems={'center'}
                >
                    <CustomProgress />
                </Stack>
            </Stack>

            <Stack css={sx.FeaturedContainer2(displayFlag)}>
                <iframe
                    src='https://flext.typeform.com/to/AiBGxC9I'
                    style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '28px',
                    }}
                ></iframe>
            </Stack>
        </>
    );
};
