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
    <Stack >
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
        width: 1056px;
        height: 773px;
        padding: 47px;
    `
};


const popupIframe = (popupUrl: string) => {
    const studentId = "6361a258c971619d5b03c0f9";
    const courseId = "7dlc1002";
    const count = 1;

    const url = "https://data.impacterpathway.com:88/progress_report/";
    const subUrl = courseId + "/" + studentId + "/" + count;
    
    // const html = '<iframe src="' + url + subUrl + '" width="961px" height="620px"></iframe>';
    // API URL 
    const html = '<iframe src="' + popupUrl + '" width="961px" height="620px"></iframe>';

    return {
      __html: html
    }
  }