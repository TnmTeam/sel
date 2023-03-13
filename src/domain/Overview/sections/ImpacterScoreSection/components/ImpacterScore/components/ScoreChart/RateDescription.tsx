import { css } from '@emotion/react';
import { Stack, Typography } from '@mui/material';
import { ChartType } from './types/chart.type';

export const RateDescription = ({ rate, studentName }: ChartType) => {

    const Impact =( {rate} : {rate:number;} ) => {
        if(rate == 0){
            return ( <Typography
                fontSize='30px'
                fontWeight={'bold'}
                color='white'
                textAlign={'center'}
                marginBottom={'10px'}
            >
                {'IMPACT'}
            </Typography>);
        }else{
            return ( <Typography
                fontSize='30px'
                fontWeight={'bold'}
                color='white'
                textAlign={'center'}
                letterSpacing={'-2px'}
                marginBottom={'10px'}
            >
                {rate } / 100
            </Typography>);
        }
        
    };

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
                    marginBottom={'120px'}
                    fontWeight={100}
                    color='white'
                    letterSpacing={'1.5px'}
                    textAlign={'center'}
                >
                    {'JOURNEY'}
                </Typography>
                <Typography
                    fontSize='26px'
                    fontWeight={'bold'}
                    color='white'
                    textAlign={'center'}
                    marginBottom={'10px'}
                >
                    {'On The Road To'}
                </Typography>
                <Impact rate={rate}/>
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
