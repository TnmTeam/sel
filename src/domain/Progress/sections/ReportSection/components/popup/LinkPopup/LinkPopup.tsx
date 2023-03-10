import { Stack, Typography } from "@mui/material";
import { css } from "@emotion/react";
import { ClosePopupBtn } from "@/domain/Overview/sections/CourseScheduleSection/components/ScheduleDetailPopup/components/ScheduleDetailPopupContainer/ClosePopupBtn";
import { ButtonContainer } from "../components";


export interface LinkPopupType {
    popupUrl: string;
    closeHandle: () => void;
}
export const LinkPopup = ({popupUrl, closeHandle}: LinkPopupType) => {

  return (
    <Stack overflow={'hidden'}>
        <ClosePopupBtn closeHandle={closeHandle} />
        {/* <Stack>{popupUrl}</Stack> */}
        <Stack css={sx.popContainer}>
            <Stack dangerouslySetInnerHTML={popupIframe(popupUrl)}></Stack>
            <br/>
            <br/>
            <ButtonContainer saveBtnClick={() => null} />
        </Stack>
    </Stack>
  );
};

const sx = {
  popContainer: css`
        width: 1030px;
        height: 980px;
        padding: 20px;        
    `
};


const popupIframe = (popupUrl: string) => {
    
    // const url = "https://data.impacterpathway.com:88/progress_report/";
    // const subUrl = courseId + "/" + studentId + "/" + count;
    
    // const html = '<iframe src="' + url + subUrl + '" width="961px" height="620px"></iframe>';
    // API URL 
    const html = '<iframe src="' + popupUrl + '" width="961px" height="900px"></iframe>';

    return {
      __html: html
    }
  }