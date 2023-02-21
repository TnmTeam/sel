import { css } from '@emotion/react';
import { Stack } from '@mui/system';
import Image from 'next/image';
import OverViewBackgroundImage from '@/assets/overview/popupCloseBtn.png';
import { ClosePopupBtnType } from './types/ScheduleDetailBox.type';

export const ClosePopupBtn = (props: ClosePopupBtnType) => (
    <Stack css={sx.closeImgBtn}>
        <Image
            onClick={props.closeHandle}
            style={{cursor: 'pointer'}}
            src={OverViewBackgroundImage}
            alt={'overview'}
        />
    </Stack>
);

const sx = {
    closeImgBtn: css`
        position: absolute;
        right: 0px;
        padding: 20px;
    `
};