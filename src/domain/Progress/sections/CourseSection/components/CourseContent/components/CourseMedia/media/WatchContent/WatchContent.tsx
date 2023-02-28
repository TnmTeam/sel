import { useGetUnitItemContent2 } from '@/data/api/progress/useProgressApiHooks';
import { DetailCourseType } from '@/domain/Progress/types/course.type';
import { css } from '@emotion/react';
import { Stack, Typography } from '@mui/material';
import { NoContent } from '../NoContent/NoContent';
import { useVideoControl } from './useVideoControl';
import { useVideoPlayButton, VideoPlayButton } from './VideoPlayButton';
import { Colors } from '@/common/themes/Color';

type CourseMediaType = {
    selectedDetailCourse: DetailCourseType | null;
};

export const WatchContent = ({ selectedDetailCourse }: CourseMediaType) => {
    var studentIdNum = 0;
    var unitIds = '';

    if (selectedDetailCourse) {
        studentIdNum = selectedDetailCourse.studentIdNum;
        unitIds = selectedDetailCourse.unitId;
    }

    var data = useGetUnitItemContent2(studentIdNum, unitIds);
    var temp = data?.data;

    var url = '';
    if (temp) {
        url = temp[0]?.content;
    }
    // console.log("WatchContent url : "+url);
    const { ref, toggleVideoPlay } = useVideoControl();
    const { playBtnVisiblity, hidePlayBtn } = useVideoPlayButton();

    return (
        <Stack css={sx.root}>
            {url && isValidHttpUrl(url) ? (
                <div css={sx.videoFrame(!playBtnVisiblity)}>
                    <div
                        css={sx.videoControlContainer(!playBtnVisiblity)}
                        onClick={toggleVideoPlay}
                    >
                        {playBtnVisiblity && <VideoPlayButton />}
                    </div>
                    <video
                        key={url}
                        ref={ref}
                        css={sx.video(isUrlContentType(url))}
                        controls={!playBtnVisiblity}
                        preload='auto'
                        onPlay={hidePlayBtn}
                        autoPlay
                    >
                        <source src={url} type='video/mp4' />
                    </video>
                </div>
            ) : url == undefined ? (              
                <NoContent />
            ) : (
                <Stack css={sx.noUrlContentRoot}>
                    <Stack css={sx.noUrlContentContainer}>
                        <Stack spacing={'50px'}>{url}</Stack>
                    </Stack>
                </Stack>
            )}
        </Stack>
    );
};

const sx = {
    root: css`
        position: relative;
        width: 100%;
        height: 754px;
        border-radius: 20px;
        overflow: hidden;
    `,
    videoFrame: (isPlaying: boolean) => css`
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        z-index: ${isPlaying ? '1' : '0'};
    `,
    video: (isType: boolean) => css`
        width: 100%;
        ${isType ? '' : 'height: 100%'}; /* mp4 only */
        object-fit: cover;
    `,
    videoControlContainer: (isPlaying: boolean) => css`
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: ${isPlaying ? '0' : '1'};
    `,
    noUrlContentRoot: css`
        width: 100%;
        height: 740px;
        display: flex;
        overflow: auto;
        align-items: center;
        padding-top: 100px;
    `,
    noUrlContentContainer: css`
        position: relative;
        width: 556px;
        height: 483px;
    `,
};

const isValidHttpUrl = (testUrl: string) => {
    let tempUrl;

    try {
        tempUrl = new URL(testUrl);
    } catch (_) {
        return false;
    }

    return tempUrl.protocol === 'http:' || tempUrl.protocol === 'https:';
};

const isUrlContentType = (testUrl: string) => {
    if (testUrl.includes('audio') || testUrl.includes('mp3')) {
        return true;
    } else {
        // mp4
        return false;
    }
};
