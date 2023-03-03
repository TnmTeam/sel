import { css } from '@emotion/react';
import { Stack, Typography, Button } from '@mui/material';
import { CourseProgressType } from './types/CourseProgress.type';
import { CourseTimeline } from './CourseTimeline';
import Image from 'next/image';
import FullBannerImage from '@/assets/overview/img-CourseProgress.png';
import Link from 'next/link';
import { CourseProgressApiType } from '@/domain/Overview/types/courseProgress.type';
import { CustomProgress } from '@/common/components/progress';
import { useSetRecoilState } from 'recoil';
import { focusInfo } from '@/common/atom/Atom';

type  DataType = {
    data: CourseProgressApiType;
}
export const CourseProgress = ({data}: DataType) => {
    const focusState:any = useSetRecoilState(focusInfo);
    
    function goViewAll() {
        // focusComponents 세팅
        var focus_param = {
            focusComponents: 'focusCourseProgress',
        };
        //console.log("CourseProgress goViewAll : ");
        focusState(focus_param);
    };

    return (
        <Stack css={sx.courseProgressContainer}>
            <CourseProgressImage />
            <Stack css={sx.courseContainer}>
                <Stack>
                    <Typography
                        variant='h5'
                        mt={'15px'}
                        ml={'15px'}
                        mb={'15px'}
                        letterSpacing='0.3px'
                        css={sx.titleText}
                    >
                        {/* 
                        Course Progress
                        */}
                        {data.result?.models.title} 
                    </Typography>
                </Stack>

                {
                    (!data.result || data.isLoading) ?
                    (
                        <Stack height={"452px"} justifyContent="center" alignItems={"center"}>
                            <CustomProgress />
                        </Stack>
                    )
                    :
                        data.result.models.plain.map((it, index) => (
                            <CourseTimeline
                                key={index}
                                title={it.title}
                                progress={it.progress}
                                time={it.time}
                                dept={it.dept}
                            />
                        ))
                }

                <Link 
                    href='/progress' 
                    onClick={goViewAll}
                    css={{ textDecoration: 'none'}}
                >
                        <Button
                            css={sx.viewAllText}
                        >
                            View all {'>'}
                        </Button>
                    </Link>

            </Stack>
        </Stack>
    );
};

const sx = {
    courseProgressContainer: css`
        position: absolute;
        width: 585.41px;
        height: 427px;
        left: 59px;
        background: #ffffff;
        border-radius: 28px;
    `,
    courseProgressImage: css`
        position: relative;
        margin-top: 17px;
        margin-left: 17px;
    `,
    courseContainer: css`
        width: 45%;
        position: absolute;
        left: 270px;
        height: 391px;
        margin-top: 17px;
        margin-left: 17px;
    `,
    titleText: css`
        font-weight: bold;
        font-size: 24px;
    `,
    viewAllText: css`
        font-family: 'DM Sans';
        font-weight: bold;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: 0.01em;
        color: #147ad6;
        margin-left: 15px;
        text-decoration-line: none;
        text-transform: none;
    `,
};

const CourseProgressImage = () => (
    <Stack css={sx.courseProgressImage}>
        <Image objectFit='cover' src={FullBannerImage} alt={'img'} />
    </Stack>
);
