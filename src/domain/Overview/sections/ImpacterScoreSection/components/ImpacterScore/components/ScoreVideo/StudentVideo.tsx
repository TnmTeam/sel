import { VideoType } from './types/video.type';
import { css } from '@emotion/react';

export const StudentVideo = ({ url }: VideoType) => {
    return (
        <video autoPlay loop muted>
            <source src={url} type='video/mp4' />
        </video>
    );
};
