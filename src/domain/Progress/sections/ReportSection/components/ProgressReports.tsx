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
import { ProgressReportskType } from "../../../types/report.type";
import { CustomProgress } from "@/common/components/progress";


type DataType = {
  data: ProgressReportskType;
};

export const ProgressReports = ({data}: DataType) => {
  
  const { modalState } = useModalHooks();
  const [popupUrl, setPopupUrl] = useState("");

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [open, setOpen] = useState(false);
  const handleClickOpen = (url: string) => {
      setOpen(true); 
      setPopupUrl(url);
  };
  const handleClose = () => {
      setOpen(false);
  };
  

  return (
    <Stack css={sx.root}>
      <Typography css={sx.title}>Progress Reports</Typography>

      {
        !data.result || data.isLoading ?
        (
          <Stack height={"452px"} justifyContent="center" alignItems={"center"}>
            <CustomProgress />
          </Stack>
        )
        : 
        (
          
          <>
            <div css={sx.imageContainer}>
              {data.result.popupList.map((it, index) => (
                <div
                  css={sx.image}
                  key={index}
                  onClick={(e)=>{handleClickOpen( it )}}
                >
                  {/* <Image src={it} alt="report" width={169} height={308} /> */}
                  <Image src={report} alt="report" width={169} height={308} />
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
                popupUrl={popupUrl}
                closeHandle={handleClose}
              />
            </Dialog>
          </>
        )
      }
      
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
    height: 315px;
    overflow: auto;
    white-space: nowrap;
  `,
  image: css`
    cursor: pointer;
  `,
};
