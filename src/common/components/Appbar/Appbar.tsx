import Link from 'next/link';
import { Colors} from '@/common/themes/Color';
import { Stack, Box, AppBar, Typography, Button } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Image from 'next/image';
import LogoImage from '@/assets/logo/Frame.png';
import { useRouter } from 'next/router';
import { TextMenu } from './components/TextMenu/TextMenu';
import { InsightsDialogButton } from '@/domain/Navigation/sections/AddInsightsSection/components';
import { NotificationDialogIcon } from '@/domain/Navigation/sections/NotificationSection/NotificationSummary/components';
import { useRecoilValue } from 'recoil';
import { studentMapState } from '@/common/atom/Atom';
import { useEffect, useState } from 'react';

export const Appbar = () => {
    const currenStudentMap: any = useRecoilValue(studentMapState);

    console.log(currenStudentMap);
    const [studentName , setStudentName]= useState("");
    useEffect(()=> {
        setStudentName(currenStudentMap.name)  ;
    },[])
    const router = useRouter();
    const currentRoute = router.pathname;
    const menu = [
        { menuType: 'logo', url: '', title: '', buttonType: '' },
        { menuType: 'blank', url: '', title: '', buttonType: '' },
        {
            menuType: 'button',
            url: '/select',
            title: '- ' + studentName + ' -',
            buttonType: 'text',
        },
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
        */
        { menuType: 'icon', url: '', title: '', buttonType: '' },
        {
            menuType: 'button',
            url: '/account',
            title: 'Account',
            buttonType: 'text',
        },
    ];
    
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position='static'
                sx={{ height: 89, background: Colors.BackBlue }}
            >
                <Toolbar component='div' sx={{ height: 89 }}>
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
                                    href='/overview'
                                >
                                    <Button>
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
                        }
                    })}
                </Toolbar>
            </AppBar>
        </Box>
    );
};

const Logo = () => {
    return (
        <Stack css={{ margin: '0px 0px 0px 0px' }}>
            <Image src={LogoImage} alt={'img'} width={'150'} />
        </Stack>
    );
};