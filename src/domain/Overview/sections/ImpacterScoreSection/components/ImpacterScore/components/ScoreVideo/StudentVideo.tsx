import { VideoType } from './types/video.type';
import { css } from '@emotion/react';

export const StudentVideo = ({ url }: VideoType) => {
    return (
        <video autoPlay loop muted css={sx.video}>
            <source src={url} type='video/mp4' />
        </video>
    );
};

const sx = {
    video: css`
        position: relative;
        width: 100%;
        height: 480px;
        object-fit: cover;
        mask-size: cover;
    `,
};