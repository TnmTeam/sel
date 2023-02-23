import { useGetUnitItemContent2 } from "@/data/api/progress/useProgressApiHooks";
import { DetailCourseType } from "@/domain/Progress/types/course.type";
import { css } from "@emotion/react";
import { Stack } from "@mui/material";
import { useVideoControl } from "./useVideoControl";
import { useVideoPlayButton, VideoPlayButton } from "./VideoPlayButton";

type CourseMediaType = {
  selectedDetailCourse: DetailCourseType | null;
};

export const WatchContent = ({ selectedDetailCourse }: CourseMediaType) => {
  var studentIdNum  = 0;
  var unitIds       = '';

  if(selectedDetailCourse) {
    studentIdNum  = selectedDetailCourse.studentIdNum;
    unitIds       = selectedDetailCourse.unitId;
  }

  var data = useGetUnitItemContent2(studentIdNum, unitIds);
  var temp = data?.data;
  
  var url = '';
  if(temp){
    url = temp[0]?.content;
  }
  //console.log("WatchContent url : "+url);
  const { ref, toggleVideoPlay } = useVideoControl();
  const { playBtnVisiblity, hidePlayBtn } = useVideoPlayButton();

  return (
    <Stack css={sx.root}>
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
          css={sx.video}
          controls={!playBtnVisiblity}
          preload="auto"
          onPlay={hidePlayBtn}
          autoPlay
        >
          <source src={url} type="video/mp4" />
        </video>
      </div>
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
    z-index: ${isPlaying ? "1" : "0"};
  `,
  video: css`
    width: 100%;
    height: 100%;
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
    z-index: ${isPlaying ? "0" : "1"};
  `,
};
