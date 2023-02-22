import { css } from '@emotion/react';
import { Stack, Typography } from '@mui/material';
import { ChartType } from './types/chart.type';

export const RateDescription = ({ rate, studentName }: ChartType) => {
    return (
        <Stack css={sx.scoreTitleTextContainer}>
            <Stack css={sx.rateTextWrapper}>
                <Typography
                    variant='h2'
                    lineHeight={1.0}
                    fontWeight={700}
                    color='white'
                    letterSpacing={'1.5px'}
                    textAlign={'center'}
                >
                    {studentName}
                </Typography>
                <Typography
                    variant='h5'
                    lineHeight={2.0}
                    marginBottom={'110px'}
                    fontWeight={100}
                    color='white'
                    letterSpacing={'1.5px'}
                    textAlign={'center'}
                >
                    {'JOURNEY'}
                </Typography>
                <Typography
                    fontSize='12px'
                    lineHeight={3.0}
                    fontWeight={200}
                    color='white'
                    letterSpacing={'1.5px'}
                    textAlign={'center'}
                    marginBottom={'10px'}
                >
                    {'IMPACTER SCORE'}
                </Typography>
                <Typography
                    fontSize='45px'
                    fontWeight={700}
                    color='white'
                    letterSpacing={'-1.75px'}
                >
                    {rate } / 100
                </Typography>
            </Stack>
        </Stack>
    );
};

const sx = {
    scoreTitleTextContainer: css`
        position: absolute;
        bottom: 10%;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        flex-direction: column;
    `,
    rateTextWrapper: css`
        position: relative;
        text-align: center;
    `,
};
