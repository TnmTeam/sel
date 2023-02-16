import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import Image from "next/image";
import arrow from "@/assets/helppopup/messages/arrow.png";
import { Stack } from "@mui/system";

type NewsCardType = {
  image: any | string;
  title: string;
  text: string;
};

export const NewsCard = ({ image, title, text }: NewsCardType) => {
  return (
    <Stack css={sx.newsBox}>
      <div css={sx.imgWrap}>
        <Image src={image} alt="pie" width={352} height={135} />
      </div>
      <Stack direction={"row"} css={sx.textContainer}>
        <Stack height="105px">
          <Typography height="21px" variant="caption" fontWeight={700} mb="4px">
            {title}
          </Typography>
          <div css={sx.textWrapper}>
            <Typography
              variant="caption"
              fontSize="13px"
              lineHeight="'21px"
              color="#757171"
            >
              {text}
            </Typography>
          </div>
        </Stack>
        <Image src={arrow} alt="arrow" width={6} height={9} />
      </Stack>
    </Stack>
  );
};

const sx = {
  newsBox: css`
    width: 100%;
    height: 260px;
    border-radius: 10px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06),
      0px 0px 0px 1px rgba(0, 0, 0, 0.08);
    margin-bottom: 20px;
    cursor: pointer;
  `,
  imgWrap: css`
    height: 135px;
    width: 100%;
    overflow: hidden;
    border-radius: 10px 10px 0 0;
  `,
  textContainer: css`
    width: 100%;
    height: 125px;
    padding: 10px 12px;
    align-items: center;
    justify-content: space-between;
    gap: 19px;
  `,

  textWrapper: css`
    width: 100%;
    flex: 1;
  `,
};
