import { css } from '@emotion/react';
import { ReactNode, useEffect, useState } from 'react';
import { Stack } from '@mui/material';
import { Appbar } from '../Appbar';
import { HelpPopup } from '../popup/HelpPopup';
import { useRecoilValue } from 'recoil';
import { loginInfo } from '@/common/atom/Atom';
import { axiosClient } from '@/data/client/client';

export interface LayoutProps {
    children: ReactNode;
}

// const model: StudentCourseItemType[] = [
//     {
//         student: 'Jamie Doe',
//         course: ['Start Task', 'Worbook', 'Video']
//     },
//     {
//         student: 'Jamie Lee',
//         course: ['Start Task', 'Worbook', 'Video', 'Video']
//     },
// ];

export const Layout = ({ children }: LayoutProps) => {
    
    
    return (
        <Stack css={st.root}>
            <Appbar/>
            <Stack direction='row' width='100%' height='100%' mt={16}>
                <main css={st.main}>{children}</main>
            </Stack>
        </Stack>
    );
};



const st = {
    root: css`
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
    `,
    main: css`
        width: 100%;
        height: 100%;
    `,
};
