import { css } from '@emotion/react';
import { Stack } from '@mui/system';
import { ScheduleDatePicker } from '@/domain/Overview/sections/CourseScheduleSection/components/ScheduleSummary/components/ScheduleContainer/ScheduleDatePicker';
import { ScheduleDetailBoxList } from './components/ScheduleDetailPopupContainer/ScheduleDetailBoxList';
import { ScheduleDetailBoxType } from './components/ScheduleDetailPopupContainer/types/ScheduleDetailBox.type';


export const ScheduleDetailPopup = ({picDate, detailList}: ScheduleDetailBoxType) => {
    
    return (
        <Stack css={sx.popupContainer}>
            
            <Stack css={sx.popupDatePicker}>
                <ScheduleDatePicker 
                    picDate={picDate}
                />
            </Stack>

            <Stack css={sx.popupCenterLine}></Stack>

            <ScheduleDetailBoxList 
                picDate={picDate}
                detailList={detailList}
            />

            <Stack css={sx.popupAddBtn}>
                + Add To Calender
            </Stack>

        </Stack>
    );
};

const sx = {
    popupCenterLine: css`
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
        width: 859px;
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
    `,
    popupScheduleList: css`
    
    `,
    scheduleBox: css`
        box-sizing: border-box;
        position: absolute;
        width: 327.23px;
        height: 76.59px;
        left: 471.53px;
        top: 108px;
        background: #FFFFFF;
        border: 0.50502px solid #979797;
        border-radius: 5.0502px;
    `,
    scheduleBoxLine: css`
        position: absolute;
        width: 7px;
        height: 76.23px;
        left: 471.53px;
        top: 108px;
        background: #147AD6;
        border-radius: 5.0502px;
    `,
    popupAddBtn: css`
        position: absolute;
        width: 140px;
        height: 24px;
        left: 670px;
        top: 412px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        color: #147AD6;
    `
};
