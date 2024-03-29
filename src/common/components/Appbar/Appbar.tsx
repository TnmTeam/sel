import { css } from '@emotion/react';
import Link from 'next/link';
import { Colors } from '@/common/themes/Color';
import { Stack, Box, AppBar, Typography, Button } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Image from 'next/image';
import LogoImage from '@/assets/logo/logo.png';
import { useRouter } from 'next/router';
import { TextMenu } from './components/TextMenu/TextMenu';
import { InsightsDialogButton } from '@/domain/Navigation/sections/AddInsightsSection/components';
import { NotificationDialogIcon } from '@/domain/Navigation/sections/NotificationSection/NotificationSummary/components';
import { Logout } from '@/domain/Navigation/sections/LogoutSection/components';
import { useRecoilValue } from 'recoil';
import { studentMapState } from '@/common/atom/Atom';
import { useEffect, useState } from 'react';
import { ST } from 'next/dist/shared/lib/utils';
import { StudentCourseSection } from './components/StudentCourseSection/StudentCourseSection';
import { useStudentList } from './components/StudentCourseSection/useStudentCourse';

export const Appbar = () => {
    const { studentListState } = useStudentList();

    // const currenStudentMap: any = useRecoilValue(studentMapState);

    // //(currenStudentMap);
    // const [studentName , setStudentName]= useState("");
    // useEffect(()=> {
    //     setStudentName(currenStudentMap.name)  ;
    // },[currenStudentMap])
    const router = useRouter();
    const currentRoute = router.pathname;
    const menu = [
        { menuType: 'logo', url: '', title: '', buttonType: '' },
        { menuType: 'blank', url: '', title: '', buttonType: '' },
        // {
        //     menuType: 'button',
        //     url: '/select',
        //     title: '- ' + studentName + ' -',
        //     buttonType: 'text',
        // },
        { menuType: 'select', url: '', title: 'StudentCourse', buttonType: '' },
        {
            menuType: 'button',
            url: '/overview',
            title: 'Overview',
            buttonType: 'text',
        },
        {
            menuType: 'button',
            url: '/progress',
            title: 'Progress',
            buttonType: 'text',
        },
        /*
        {
            menuType: 'button',
            url: '/growth',
            title: 'Growth',
            buttonType: 'text',
        },
        {
            menuType: 'button',
            url: '/resources',
            title: 'Resources',
            buttonType: 'text',
        },
        {
            menuType: 'buttonPopup',
            url: '/addinsights',
            title: 'Add Insights',
            buttonType: 'outline',
        },
        
        { menuType: 'icon', url: '', title: '', buttonType: '' },
        */
        {
            menuType: 'button',
            url: '/account',
            title: 'Account',
            buttonType: 'text',
        },
        {
            menuType: 'logout',
            url: '/',
            title: 'Logout',
            buttonType: 'text',
        },
    ];

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Stack
                sx={{
                    position: 'fixed',
                    zIndex: 9998,
                    top: 0,
                    left: 0,
                    background: Colors.BackBlue,
                    width: '100%',
                    height: 79,
                }}
            ></Stack>
            <AppBar
                position='static'
                sx={{
                    height: 79,
                    background: Colors.BackBlue,
                    position: 'fixed',
                    zIndex: 9999,
                    width: '1440px',
                    boxShadow: '0 0 0 0',
                }}
            >
                <Toolbar component='div' sx={{ height: 79 }}>
                    {menu.map((item, index) => {
                        if (item.menuType === 'button') {
                            return (
                                <TextMenu
                                    key={index}
                                    url={item.url}
                                    currentRoute={currentRoute}
                                    title={item.title}
                                    buttonType={item.buttonType}
                                />
                            );
                        } else if (item.menuType === 'buttonPopup') {
                            return <InsightsDialogButton key={index} />;
                        } else if (item.menuType === 'logo') {
                            return (
                                <Link
                                    key={index}
                                    css={{ textDecoration: 'none' }}
                                    href='https://www.impacterpathway.com/'
                                >
                                    <Button
                                        css={{
                                            ':hover': {
                                                background: Colors.BackBlue,
                                            },
                                        }}
                                    >
                                        <Logo />
                                    </Button>
                                </Link>
                            );
                        } else if (item.menuType === 'blank') {
                            return (
                                <Typography
                                    key={index}
                                    variant='h6'
                                    component='div'
                                    sx={{ flexGrow: 1 }}
                                ></Typography>
                            );
                        } else if (item.menuType === 'icon') {
                            return <NotificationDialogIcon key={index} />;
                        } else if (item.menuType === 'logout') {
                            return <Logout key={index} />;
                        } else if (item.menuType === 'select') {
                            return (
                                <StudentCourseSection
                                    key={index}
                                    data={studentListState}
                                />
                            );
                        }
                    })}
                </Toolbar>
                {/*<StudentCourseSection data={studentListState} />*/}
            </AppBar>
        </Box>
    );
};

const Logo = () => {
    return (
        <Stack css={{ margin: '0px 0px 0px -10px' }}>
            <Image src={LogoImage} alt={'img'} width={'180'} />
        </Stack>
    );
};
