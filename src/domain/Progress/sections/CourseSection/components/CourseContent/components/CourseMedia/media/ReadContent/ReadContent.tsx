import { css } from "@emotion/react";
import { Stack } from "@mui/material";
import Image from "next/image";
import ReadContentSampleImage from "@/assets/progress/img-read-content.png";
import { MediaType } from "../media.type";
import { DetailCourseType } from '@/domain/Progress/types/course.type';

type CourseMediaType = {
  selectedDetailCourse: DetailCourseType | null;
};

export const ReadContent = ({ selectedDetailCourse }: CourseMediaType) => {
  //console.log("ReadContent url : "+url);
  //const imageUrl = (url).startsWith("") ? ReadContentSampleImage : url;
  const imageUrl = (selectedDetailCourse?.contentUrl)? selectedDetailCourse.contentUrl : ReadContentSampleImage;
  
  return (
    <Stack css={sx.root}>
      <div css={sx.image}>
        <Image fill src={imageUrl} alt="img" />
      </div>
    </Stack>
  );
};

const sx = {
  root: css`
    width: 100%;
    height: 754px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,

  image: css`
    position: relative;
    width: 100%;
    height: 523px;
  `,
};
