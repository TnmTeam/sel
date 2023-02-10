import { css } from '@emotion/react';
import { Stack, Typography } from '@mui/material';
import { CourseProgressType } from './types/CourseProgress.type';
import { CourseTimeline } from './CourseTimeline';
import Image from 'next/image';
import FullBannerImage from '@/assets/overview/img-CourseProgress.png';
import Link from '@mui/material/Link';

export const CourseProgress = ({ title, plain }: CourseProgressType) => {
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
                        {title}
                    </Typography>
                </Stack>
                {plain.map((it, index) => (
                    <CourseTimeline
                        key={index}
                        title={it.title}
                        date={it.date}
                        time={it.time}
                        dept={it.dept}
                    />
                ))}
                <Link href='/progress' css={sx.viewAllText}>
                    View all {'>'}
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
    `,
    viewAllText: css`
        font-family: 'Poppins';
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.01em;
        color: #147ad6;
        margin-left: 15px;
        text-decoration-line: none;
    `,
};

const CourseProgressImage = () => (
    <Stack css={sx.courseProgressImage}>
        <Image objectFit='cover' src={FullBannerImage} alt={'img'} />
    </Stack>
);
