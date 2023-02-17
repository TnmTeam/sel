import { css } from '@emotion/react';
import { ReactNode } from 'react';
import { Stack } from '@mui/material';
import { Appbar } from '../Appbar';
import { HelpPopup } from '../popup/HelpPopup';

export interface LayoutProps {
    children: ReactNode;
}

const model = {
    StudentCourse:  [
        {
            student: 'Jamie Doe',
            course: ['Start Task', 'Worbook', 'Video']
        },
        {
            student: 'Jamie Lee',
            course: ['Start Task', 'Worbook', 'Video', 'Video']
        },
    ],
};

export const Layout = ({ children }: LayoutProps) => {
    return (
        <Stack css={st.root}>
            <Appbar StudentCourseList={model.StudentCourse} />
            <Stack direction='row' width='100%' height='100%'>
                <main css={st.main}>{children}</main>
            </Stack>
            <HelpPopup />
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
