import { Stack, Typography } from "@mui/material";
import { css } from "@emotion/react";
import Image from "next/image";
import report from "@/assets/progress/report/report.png";
import { ImagePopup } from "./popup/ImagePopup";
import { useModalHooks } from "./useModalHooks";

export const ProgressReports = () => {
  const models = [report, report];
  const { modalState } = useModalHooks();

  return (
    <Stack css={sx.root}>
      <Typography css={sx.title}>Progress Reports</Typography>
      <div css={sx.imageContainer}>
        {models.map((it, index) => (
          <div
            css={sx.image}
            key={index}
            onClick={() => modalState.onImageOpen(it)}
          >
            <Image src={it} alt="report" width={169} height={308} />
          </div>
        ))}
      </div>
      <ImagePopup
        open={modalState.open}
        onClose={modalState.onClose}
        image={modalState.image}
      />
    </Stack>
  );
};

const sx = {
  root: css`
    margin-bottom: 60px;
  `,
  title: css`
    font-weight: 700;
    font-size: 24px;
    line-height: 31px;
    color: #0a0b26;
    margin-bottom: 31px;
  `,
  imageContainer: css`
    display: flex;
    gap: 43px;
  `,
  image: css`
    cursor: pointer;
  `,
};
