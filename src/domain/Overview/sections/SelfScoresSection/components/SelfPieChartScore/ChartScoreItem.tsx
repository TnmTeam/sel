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
            <Stack css={sx.chart}>{pieChart(iconType, progress)}</Stack>
            <Stack css={sx.progressWrapper}>
                <Typography
                    variant='h1'
                    color='#253858'
                    letterSpacing={'-1.75px'}
                    mb='12px'
                    fontSize={'70pt'}
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
        position: relative;
        width: 250px;
        height: 449px;
    `,
    chart: css`
        width: 90%;
        margin: auto;
        margin-bottom: 130px;
        height: 449px;
    `,
    progressWrapper: css`
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        transform: translateX(-50%);
        transform: translateY(50%);
    `,
};

const pieChart = (iconType: string, progress: number) => {
    if (iconType === 'TuneIcon') {
        return (
            <PieChart
                data={[{ value: 1, key: 1, color: 'url(#gradient1)' }]}
                reveal={progress * 20}
                lineWidth={14}
                background={'#DBDFF1'}
                lengthAngle={230}
                startAngle={155}
                rounded
                animate
            >
                <defs>
                    <linearGradient id='gradient1'>
                        <stop offset='0%' stopColor='#6B52BD' />
                        <stop offset='100%' stopColor='#D22066' />
                    </linearGradient>
                </defs>
            </PieChart>
        );
    } else if (iconType === 'GpsFixedIcon') {
        return (
            <PieChart
                data={[{ value: 1, key: 1, color: 'url(#gradient2)' }]}
                reveal={progress * 20}
                lineWidth={14}
                background={'#DBDFF1'}
                lengthAngle={230}
                startAngle={155}
                rounded
                animate
            >
                <defs>
                    <linearGradient id='gradient2'>
                        <stop offset='0%' stopColor='#147AD6' />
                        <stop offset='100%' stopColor='#253858' />
                    </linearGradient>
                </defs>
            </PieChart>
        );
    } else if (iconType === 'FavoriteIcon') {
        return (
            <PieChart
                data={[{ value: 1, key: 1, color: 'url(#gradient3)' }]}
                reveal={progress * 20}
                lineWidth={14}
                background={'#DBDFF1'}
                lengthAngle={230}
                startAngle={155}
                rounded
                animate
            >
                <defs>
                    <linearGradient id='gradient3'>
                        <stop offset='0%' stopColor='#E6BF71' />
                        <stop offset='100%' stopColor='#EA4848' />
                    </linearGradient>
                </defs>
            </PieChart>
        );
    } else {
        null;
    }
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
