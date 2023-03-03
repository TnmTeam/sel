import { css } from '@emotion/react';
import { Stack } from '@mui/system';
import { ScheduleDatePicker } from '@/domain/Overview/sections/CourseScheduleSection/components/ScheduleSummary/components/ScheduleDatePicker/ScheduleDatePicker';
import { ScheduleDetailBoxList } from './components/ScheduleDetailPopupContainer/ScheduleDetailBoxList';
import { ScheduleDetailBoxAddPopup } from './components/ScheduleDetailPopupContainer/ScheduleDetailBoxAddPopup';
import { SchedulePopupType } from './components/ScheduleDetailPopupContainer/types/ScheduleDetailBox.type';
import Image from 'next/image';
import OverViewBackgroundImage from '@/assets/overview/popupCloseBtn.png';
import { ClosePopupBtn } from './components/ScheduleDetailPopupContainer/ClosePopupBtn';


export const ScheduleDetailPopup = ({picDate, changeDate, closeHandle}: SchedulePopupType) => {
    
    return (
        <Stack css={sx.popupContainer}>
            <Stack css={sx.popupDatePicker}>                {/* Date Picker */}
                <ScheduleDatePicker 
                    picDate={picDate}
                    changeDate={changeDate}
                    disabledYN={false}
                />
            </Stack>

            {/*<Stack css={sx.popupCenterLine}></Stack>*/}        {/* Center Line */}

            <ClosePopupBtn closeHandle={closeHandle} />     {/* Close Btn */}

            <ScheduleDetailBoxList 
                picDate={picDate}
            />                                              {/* PicDate & List */}

            <ScheduleDetailBoxAddPopup />                   {/* Add Btn */}
        </Stack>
    );
};

const sx = {
    popupCenterLine: css`
        position: absolute;
        top: 50%;
        width: 353px;
        height: 0px;
        border: 0.25px solid #B9B9B9;
        transform: rotate(90deg);
        flex: none;
        order: 1;
        flex-grow: 0;
    `,
    popupContainer: css`
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0px;
        width: 449px;
        height: 469px;
        background: #FFFFFF;
        box-shadow: 0px 20px 24px -4px rgba(16, 24, 40, 0.1), 0px 8px 8px -4px rgba(16, 24, 40, 0.04);
        border-radius: 12px;
    `,
    popupDatePicker: css`
        position: absolute;
        width: 391px;
        height: 427px;
        left: 24px;
        top: 20px;
        border-radius: 28px;
    `
};
