import { Stack, Typography } from "@mui/material";
import { css } from "@emotion/react";
import Image from "next/image";
import report from "@/assets/progress/report/report.png";
import { ImagePopup } from "./popup/ImagePopup";
import { useModalHooks } from "./useModalHooks";

import Dialog from '@mui/material/Dialog';
import {useState} from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { LinkPopup } from "./popup/LinkPopup";


export const ProgressReports = () => {
  const models = [report, report];
  const { modalState } = useModalHooks();

  const [popupIndex, setPopupIndex] = useState(0);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [open, setOpen] = useState(false);
  const handleClickOpen = (idx: number) => {
      setOpen(true); 
      setPopupIndex(idx);
      console.log("popupIndex ",popupIndex);
  };
  const handleClose = () => {
      setOpen(false);
  };
  


  return (
    <Stack css={sx.root}>
      <Typography css={sx.title}>Progress Reports</Typography>
      <div css={sx.imageContainer}>
        {models.map((it, index) => (
          <div
            css={sx.image}
            key={index}
            onClick={(e)=>{handleClickOpen(index)}}
            // onClick={() => modalState.onImageOpen(it)}
          >
            <Image src={it} alt="report" width={169} height={308} />
          </div>
        ))}
      </div>
      
      <Dialog
        fullScreen={fullScreen}
        maxWidth={false}
        open={open}
        onClose={handleClose}
      >
        <LinkPopup
          popupIndex={popupIndex}
          closeHandle={handleClose}
        />
      </Dialog>

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
    
    /*
    border: 5px solid black;
    */
    width: 450px;
    overflow: auto;
    white-space: nowrap;
  `,
  image: css`
    cursor: pointer;
  `,
};
