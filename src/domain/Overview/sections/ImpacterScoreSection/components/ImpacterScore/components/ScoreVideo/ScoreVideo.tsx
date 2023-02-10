import { css } from '@emotion/react';
import { Stack } from '@mui/system';
import { VideoType } from './types/video.type';
import { StudentVideo } from './StudentVideo';

export const ScoreVideo = ({ url }: VideoType) => {
    return (
        <Stack css={sx.video}>
            <Stack css={sx.videoWrapper}>
                <StudentVideo url={url} />
            </Stack>
        </Stack>
    );
};

const sx = {
    video: css`
        position: absolute;
        width: 702px;
        height: 503px;
        right: 59px;
        padding: 15px;
        border-radius: 15px;
        background-color: white;
    `,
    videoWrapper: css`
        position: relative;
        border-radius: 15px;
        overflow: hidden;
    `,
};
