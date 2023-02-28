import * as React from 'react';
import { css } from '@emotion/react';
import {
    NavigationItems,
    WhiteButtons,
    FlexBlueButtons,
    Colors,
} from '@/common/themes/Color';

import { Button } from '@mui/material';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
    courseArrayState,
    courseMapState,
    studentArrayState,
    studentMapState,
    loginInfo,
} from '@/common/atom/Atom';

export const Logout = () => {
    const studentArrayHandlerState = useSetRecoilState(studentArrayState);
    const courseArrayHandlerState = useSetRecoilState(courseArrayState);
    const loginInfoHandlerState = useSetRecoilState(loginInfo);
    const studentMapHandlerState = useSetRecoilState(studentMapState);
    const courseMapHandlerState = useSetRecoilState(courseMapState);

    const dataClear = () => {
        studentArrayHandlerState([]);
        courseArrayHandlerState([]);
        loginInfoHandlerState({});
        studentMapHandlerState({});
        courseMapHandlerState({});
        window.sessionStorage.clear();
        location.href = '/';
    };

    return (
        <Button sx={stOutlineButton} onClick={dataClear}>
            Logout
        </Button>
    );
};

const stOutlineButton = {
    fontSize: '15pt',
    textTransform: 'none',
    marginRight: '40px',
    color: NavigationItems.TextColor,
    ':hover': {
        color: NavigationItems.OnHoverTextColor,
    },
};
