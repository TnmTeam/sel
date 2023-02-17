import { css } from '@emotion/react';
import { Stack } from '@mui/system';
import { ScoreChart, ScoreVideo } from './components';
import { ChartType } from '@/domain/Overview/types/impacterScore.type';

type DataType = {
    models: ChartType;
};

export const ImpacterScore = ({ models }: DataType) => {
    return (
        <Stack css={sx.ImpacterScoreContainer} direction={'row'}>
            <ScoreChart
                rate={models.rate}
                studentName={models.studentName + "'s"}
            />
            <ScoreVideo url={models.url} />
        </Stack>
    );
};

const sx = {
    ImpacterScoreContainer: css`
        width: 100%;
        height: 548px;
        background: #4a7199;
        margin-top: 80px;
    `,
};
