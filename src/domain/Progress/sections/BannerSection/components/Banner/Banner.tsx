import { css } from "@emotion/react";
import { Stack } from "@mui/system";
import Image from "next/image";
import FullBannerImage from "@/assets/progress/banner/img-banner.png";
import { CourseCompletionChart, CurrentCourseTitle } from "./components";
import { BannerType } from "@/domain/Progress/types/banner.type";

type BannerDataType = {
  models: BannerType;
};

export const Banner = ({ models }: BannerDataType) => {
  return (
    <Stack css={sx.bannerContainer}>
      <BannerImage />
      <CurrentCourseTitle title={models.title} desc={models.desc} />
      <CourseCompletionChart rate={models.rate} />
    </Stack>
  );
};

const sx = {
  bannerContainer: css`
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
