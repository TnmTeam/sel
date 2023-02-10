import { css } from '@emotion/react';
import { Stack } from '@mui/system';
import { ScoreChart, ScoreVideo } from './components';

export const ImpacterScore = () => {
    const model = {
        impacterScore: {
            rate: 78,
            studentName: "Jaime's",
        },
        StudentVideo: {
            url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        },
    };
    return (
        <Stack css={sx.ImpacterScoreContainer} direction={'row'}>
            <ScoreChart
                rate={model.impacterScore.rate}
                studentName={model.impacterScore.studentName}
            />
            <ScoreVideo url={model.StudentVideo.url} />
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
