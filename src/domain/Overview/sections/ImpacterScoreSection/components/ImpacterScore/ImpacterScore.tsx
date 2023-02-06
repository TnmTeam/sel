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
        <Stack>
            <ScoreChart
                rate={model.impacterScore.rate}
                studentName={model.impacterScore.studentName}
            />
            <ScoreVideo url={model.StudentVideo.url} />
        </Stack>
    );
};

const sx = {
    ImpacterScoreContainer: css``,
    opacity: css`
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        background-color: rgba(10, 11, 38, 0.6);
    `,
};
