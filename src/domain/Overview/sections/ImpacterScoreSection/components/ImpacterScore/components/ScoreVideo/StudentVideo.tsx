import { VideoType } from './types/video.type';
import { css } from '@emotion/react';
import { useVideoPlayButton } from "@/domain/Progress/sections/CourseSection/components/CourseContent/components/CourseMedia/media/WatchContent/VideoPlayButton";

export const StudentVideo = ({ url }: VideoType) => {

    const { playBtnVisiblity, hidePlayBtn } = useVideoPlayButton();

    return (
        <video 
            autoPlay 
            loop 
            muted 
            css={sx.video}
            onPlay={hidePlayBtn}
            controls={!playBtnVisiblity}
        >
            <source src='assets/videos/video-intro.mov' type='video/mp4' />
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