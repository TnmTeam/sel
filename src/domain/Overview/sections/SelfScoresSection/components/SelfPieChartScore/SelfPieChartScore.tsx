import { css } from '@emotion/react';
import { Stack } from '@mui/system';
import { Box } from '@mui/system';
import { PieChart } from 'react-minimal-pie-chart';
import { Colors } from '@/common/themes/Color';
import { ChartScoreItem } from './ChartScoreItem';

export const SelfPieChartScore = () => {
    return (
        <Stack css={sx.mainContainer}>
            <Box css={sx.itemContainer} flexDirection={'row'}>
                <Box css={sx.itemWrapper}>
                    <div css={sx.comingSoon}>Coming Soon</div>
                    <ChartScoreItem
                        progress={3}
                        progressDesc={'Self-Control'}
                        iconType={'TuneIcon'}
                    />
                </Box>
                <Box css={sx.itemWrapper}>
                    <div css={sx.comingSoon}>Coming Soon</div>
                    <ChartScoreItem
                        progress={4}
                        progressDesc={'Purpose'}
                        iconType={'GpsFixedIcon'}
                    />
                </Box>
                <Box css={sx.itemWrapper}>
                    <div css={sx.comingSoon}>Coming Soon</div>
                    <ChartScoreItem
                        progress={3}
                        progressDesc={'Gratitude'}
                        iconType={'FavoriteIcon'}
                    />
                </Box>
            </Box>
        </Stack>
    );
};

const sx = {
    mainContainer: css`
        position: relative;
        height: 449px;
        padding-left: 59px;
        padding-right: 59px;
        background-color: #4a7199;
        margin-top: 40px;
    `,
    itemContainer: css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: center;
    `,
    itemWrapper: css`
        width: 415.77px;
        line-height: 449px;
        display: flex;
        background-color: #ffffff;
        border-radius: 10px;
        flex-direction: column;
        font-size: 50pt;
        align-items: center;
    `,
    comingSoon: css`
        background: rgba(0, 0, 0, 0.7);
        font-size: 60px;
        color: white;
        position: absolute;
        width: 415.77px;
        height: 449px;
        border-radius: 10px;
        z-index: 999;
    `,
};
