import { Typography } from "@mui/material";
import { css } from "@emotion/react";
import workbook from "@/assets/progress/report/workbook.png";
import Image from "next/image";
import { StudentWorkbookType } from "../../../types/report.type";
import { CustomProgress } from "@/common/components/progress";
import { Stack } from "@mui/material";
import dynamic from 'next/dynamic';

const ReactGoogleSlides = dynamic(
  () => import('react-google-slides'),
  {ssr: false}
);

type DataType = {
  data: StudentWorkbookType;
};

export const StudentWorkbook = ({data}: DataType) => {
  return (
    <Stack css={sx.container}>
      <Typography css={sx.title}>Student Workbook</Typography>

      {
        !data.result || data.isLoading ?
        (
          <Stack height={"452px"} justifyContent="center" alignItems={"center"}>
            <CustomProgress />
          </Stack>
        )
        : 
        (
          data.result?.workbookId == undefined ?
          (
            <Stack 
              style={{
                width: "675px", 
                height: "990px",
                backgroundColor: "#efefef",
                fontFamily: "DM Sans",
                fontWeight: "400",
                fontSize: "20px",
                textAlign: "center",
              }}
            >
              No Presentation
            </Stack>
          )
          :
          (
            <ReactGoogleSlides
              width={675} 
              height={990}
              slidesLink={data.result.workbookId}
              position={1}
              slideDuration={10}
              showControls={true}     // Toggles the slideshow controls at the bottom of the screen 
            />
          )
        )
      }
      
    </Stack>
  );
  
};


const sx = {
  title: css`
    font-weight: 700;
    font-size: 24px;
    line-height: 31px;
    color: #0a0b26;
    margin-bottom: 31px;
  `,
  container: css`
    width: 675px; 
    height: 973px;
  `
};
