import { Avatar, Stack, Typography } from '@mui/material';
import { css } from '@emotion/react';
import { PieChart } from 'react-minimal-pie-chart';
import { Colors } from '@/common/themes/Color';
import { ScoreType } from './types/socre.type';
import TuneIcon from '@mui/icons-material/Tune';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import FavoriteIcon from '@mui/icons-material/Favorite';

export const ChartScoreItem = ({
    progress,
    progressDesc,
    iconType,
}: ScoreType) => {
    return (
        <Stack css={sx.item}>
            <div css={sx.chart}>
                <PieChart
                    data={[{ value: 1, key: 1, color: Colors.BackBlue }]}
                    reveal={progress * 20}
                    lineWidth={14}
                    background={'#DBDFF1'}
                    lengthAngle={230}
                    startAngle={155}
                    rounded
                    animate
                />
            </div>
            <Stack css={sx.progressWrapper}>
                <Typography
                    variant='h1'
                    color='#253858'
                    letterSpacing={'-1.75px'}
                    mb='12px'
                >
                    {progress}
                </Typography>
                <Typography
                    variant='subtitle1'
                    lineHeight={1}
                    color=' #AAAEC1'
                    letterSpacing={'1.5px'}
                    mb='10px'
                >
                    {'out of 5'}
                </Typography>
                <Avatar sx={{ width: 60, height: 60, background: '#FFD8D8' }}>
                    {iconImage(iconType)}
                </Avatar>
                <Typography
                    variant='subtitle1'
                    color='#253858'
                    letterSpacing={'1.5px'}
                    mt={3}
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
        width: 250px;
        position: relative;
    `,
    chart: css`
        width: 90%;
        margin: 0 auto;
    `,
    progressWrapper: css`
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        top: 28%;
        left: 50%;
        transform: translateX(-50%);
    `,
};

const iconImage = (iconType: string) => {
    if (iconType === 'FavoriteIcon') {
        return <FavoriteIcon fontSize='large' sx={{ color: 'red' }} />;
    } else if (iconType === 'GpsFixedIcon') {
        return <GpsFixedIcon fontSize='large' sx={{ color: 'black' }} />;
    } else if (iconType === 'TuneIcon') {
        return <TuneIcon fontSize='large' sx={{ color: Colors.BackBlue }} />;
    } else {
        null;
    }
};
