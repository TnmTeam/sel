import { Colors } from "@/common/themes/Color";
import { css } from "@emotion/react";
import { Button, Stack, Typography } from "@mui/material";
import ImageCard from "@/assets/progress/banner/img-banner.png";
import Image from "next/image";

export const MapCard = () => {
  const models = {
    title: "Finding Your Role to Make Team Work",
    desc: "Being on a team isn't easy. Especially when the stakes are high and results really matter. In this course, you'll learn how to listen and empower others; and you'll gain an appreciation for the importance of roles and responsibilities when completing large-scale tasks.",
    btnText: "Enroll $1495",
  };

  return (
    <Stack className="mapCard" css={sx.card}>
      <div css={sx.image}>
        <Image fill src={ImageCard} alt="img" />
      </div>
      <Stack spacing="15px" css={sx.content}>
        <Stack spacing="4px">
          <Typography
            fontSize="22px"
            lineHeight="28px"
            color={Colors.BottomBlue}
            css={sx.title}
          >
            {models.title}
          </Typography>
          <Typography
            fontSize="12px"
            lineHeight="20px"
            color="#94A3B8"
            css={sx.desc}
          >
            {models.desc}
          </Typography>
        </Stack>
        <Button fullWidth css={sx.btn}>
          {"Enroll $1495"}
        </Button>
      </Stack>
    </Stack>
  );
};

const sx = {
  card: css`
    width: 309px;
    height: 441px;
    display: none;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 28px;
    overflow: hidden;
    box-shadow: 12px 0px 24px rgba(0, 0, 0, 0.12);
    z-index: 2;
  `,
  image: css`
    position: relative;
    width: 100%;
    height: 150px;
  `,
  content: css`
    width: 100%;
    flex: 1;
    padding: 17px 24px 22px 24px;
    background-color: white;
  `,
  title: css`
    width: 100%;
    height: 56px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  `,
  desc: css`
    width: 100%;
    height: 140px;
    letter-spacing: 0.25px;
    white-space: break-spaces;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 7;
    -webkit-box-orient: vertical;
  `,
  btn: css`
    height: 37px;
    background-color: #6394c7;
    border-radius: 6px;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    color: white;
    &:hover {
      background-color: #6394c7;
    }
  `,
};
