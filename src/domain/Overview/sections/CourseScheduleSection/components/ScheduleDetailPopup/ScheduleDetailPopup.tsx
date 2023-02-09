import { css } from '@emotion/react';
import { Stack } from '@mui/system';
import { ScheduleDatePicker } from '@/domain/Overview/sections/CourseScheduleSection/components/ScheduleSummary/components/ScheduleContainer/ScheduleDatePicker';
import { ScheduleDetailBoxList } from './components/ScheduleDetailPopupContainer/ScheduleDetailBoxList';
import { ScheduleDetailBoxAddPopup } from './components/ScheduleDetailPopupContainer/ScheduleDetailBoxAddPopup';
import { SchedulePopupType } from './components/ScheduleDetailPopupContainer/types/ScheduleDetailBox.type';
import Image from 'next/image';
import OverViewBackgroundImage from '@/assets/overview/popupCloseBtn.png';

export interface CloseBtnType {
    closeHandle: () => void;
}
export const ScheduleDetailPopup = ({picDate, detailList, closeHandle}: SchedulePopupType) => {
    
    return (
        <Stack css={sx.popupContainer}>
            
            <Stack css={sx.popupDatePicker}>
                <ScheduleDatePicker 
                    picDate={picDate}
                />
            </Stack>

            <Stack css={sx.popupCenterLine}></Stack>

            <CloseBtnImage 
                closeHandle={closeHandle}
            />

            <ScheduleDetailBoxList 
                picDate={picDate}
                detailList={detailList}
            />

            <ScheduleDetailBoxAddPopup />

            {/* <Stack css={sx.popupAddBtn}>
                + Add To Calender
            </Stack> */}

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
        padding: 25px;
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
        cursor: pointer;
    `,
    closeImgBtn: css`
        position: absolute;
        right: 0px;
        padding: 20px;
        cursor: pointer;
    `
};

const CloseBtnImage = (props: CloseBtnType) => (
    <Stack css={sx.closeImgBtn}>
        <Image
            onClick={props.closeHandle}
            src={OverViewBackgroundImage}
            alt={'overview'}
        />
    </Stack>
);

