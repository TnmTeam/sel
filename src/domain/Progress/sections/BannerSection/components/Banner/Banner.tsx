import { css } from "@emotion/react";
import { Stack } from "@mui/system";
import Image from "next/image";
import FullBannerImage from "@/assets/progress/banner/img-banner.png";
import { CourseCompletionChart, CurrentCourseTitle } from "./components";

export const Banner = () => {
  const model = {
    title: {
      caption: "CURRENT COURSE",
      currentCourseTitle: "The 7-Day Student Leadership Challenge",
      currentCourseDesc: "How To Grow Your Mindset In Just One Week",
    },
    pregress: {
      rate: 50,
    },
  };
  return (
    <Stack css={sx.root}>
      <BannerImage />
      <CurrentCourseTitle
        caption={model.title.caption}
        title={model.title.currentCourseTitle}
        desc={model.title.currentCourseDesc}
      />
      <CourseCompletionChart rate={model.pregress.rate} />
    </Stack>
  );
};

const sx = {
  root: css`
    height: 452px;
    position: relative;
    overflow: hidden;
  `,
  bannerImage: css`
    position: relative;
    z-index: 0;
  `,
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

const BannerImage = () => (
  <Stack css={sx.bannerImage}>
    <Image objectFit="cover" src={FullBannerImage} alt={"img"} />
    <div css={sx.opacity}></div>
  </Stack>
);
