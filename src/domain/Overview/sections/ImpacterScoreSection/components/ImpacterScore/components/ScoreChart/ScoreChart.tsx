import { css } from '@emotion/react';
import { Stack } from '@mui/system';
import { ChartType } from './types/chart.type';
import { HalfPieChart } from './HalfPieChart';
import { RateDescription } from './RateDescription';
import { ChartLine, ChartCenter } from './ChartLine';

export const ScoreChart = ({ rate, studentName }: ChartType) => {
    return (
        <Stack css={sx.chart}>
            <Stack css={sx.chartWrapper}>
                <HalfPieChart rate={rate} studentName={studentName} />
                <RateDescription rate={rate} studentName={studentName} />
            </Stack>
            <Stack css={sx.chartLine}>
                <ChartLine rate={rate} studentName={studentName} />
            </Stack>
            <Stack css={sx.chartCenter}>
                <ChartCenter />
            </Stack>
        </Stack>
    );
};

const sx = {
    chart: css`
        width: 400px;
        position: absolute;
        top: 70px;
        left: 150px;
    `,
    chartWrapper: css`
        width: 100%;
        position: relative;
    `,
    chartLine: css`
        position: absolute;
        top: 80px;
        left: 200px;
    `,
    chartCenter: css`
        position: absolute;
        top: 172px;
        left: 174px;
    `,
};
