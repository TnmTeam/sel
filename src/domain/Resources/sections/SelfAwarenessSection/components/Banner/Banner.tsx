import { css } from '@emotion/react';
import { Stack } from '@mui/material';
import FullBannerImage from "@/assets/progress/banner/img-banner.png";
import Image from 'next/image';
import { SelfAwarenessTitle } from './components';

export const Banner = () => {
    const model = {
        title: {
            selfAwarenessTitle: `Self\nAwareness`,
            selfAwarenessCaption : "FEATURED VIDEO",
            selfAwarenessDesc: `How To Talk to Your Kids\nAbout Identity`,
        },
        pregress: {
          rate: 50,
        },
      };
      
    return (
        <Stack css={sx.bannerContainer}>
            <BannerImage />
            <SelfAwarenessTitle
                title={model.title.selfAwarenessTitle}
                desc={model.title.selfAwarenessDesc}
                caption={model.title.selfAwarenessCaption}
            />
      </Stack>
    );
};

const sx = {
    bannerContainer: css`
    height: 614px;
    position: relative;
    overflow: hidden;
    white-space: pre-line;
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
