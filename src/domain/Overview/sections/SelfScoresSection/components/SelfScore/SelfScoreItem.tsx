import { LinearProgress, Stack, Typography } from '@mui/material';
import { css } from '@emotion/react';
import { SelfType } from './selfType/self.type';

export const SelfScoreItem = ({
    selfCnt,
    selfValue,
    progress,
    progressDesc,
}: SelfType) => {
    return (
        <Stack css={sx.item} >
            <div css={sx.slider}>
                {linearProgress(selfCnt, progress)}
            </div>
            <Stack css={sx.progressWrapper}>
                <Typography
                    variant='h1'
                    color='#253858'
                    letterSpacing={'-1.75px'}
                    fontSize={'70pt'}
                    mb='5px'
                >
                    {selfValue}
                </Typography>
                <Typography
                    variant='subtitle1'
                    lineHeight={1}
                    color=' #AAAEC1'
                    letterSpacing={'1.5px'}
                    mb='60px'
                >
                    {'out of 5'}
                </Typography>
                <Typography
                    variant='subtitle1'
                    color='#253858'
                    letterSpacing={'1.5px'}
                    fontSize={'20pt'}
                >
                    {progressDesc}
                </Typography>
            </Stack>
        </Stack>
    );
};

const sx = {
    item: css`
        width: 98%;
        position: relative;
        align-items: center;
    `,
    slider: css`
        height: 250px;
        width: 60%;
        margin: 0 auto;
    `,
    progressWrapper: css`
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        top: 16%;
        left: 50%;
        transform: translateX(-50%);
    `,
};

const linearProgress = (selfCnt: number, progress: number) => {
    if (selfCnt === 1) {
        return (
            <LinearProgress 
                variant="determinate" 
                value={progress} 
                color="secondary"
                sx={{
                    height: 14,
                    top: 154,
                    borderRadius: '10px',
                    '& .MuiLinearProgress-bar': {
                        borderRadius: '10px',
                        background: `linear-gradient(90deg, #6FCBB6 ${100 - progress}%, #9C64F4 100%)`,
                      },
                  }}
            />
        );
    } else if (selfCnt === 2) {
        return (
            <LinearProgress 
                variant="determinate" 
                value={progress} 
                color="secondary"
                sx={{
                    height: 14,
                    top: 154,
                    borderRadius: '10px',
                    '& .MuiLinearProgress-bar': {
                        borderRadius: '10px',
                        background: `linear-gradient(90deg, #00CCFF ${100 - progress}%, #FF00CC 100%)`,
                      },
                  }}
            />
        );
    } else if (selfCnt === 3) {
        return (
            <LinearProgress 
                variant="determinate" 
                value={progress} 
                color="secondary"
                sx={{
                    height: 14,
                    top: 154,
                    borderRadius: '10px',
                    '& .MuiLinearProgress-bar': {
                        borderRadius: '10px',
                        background: `linear-gradient(90deg, #006699 ${100 - progress}%, #FF6633 100%)`,
                      },
                  }}
            />
        );
    } else {
        null;
    }
};
