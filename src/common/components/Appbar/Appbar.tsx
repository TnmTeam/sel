import Link from 'next/link';
import { Colors, NavigationItems, WhiteButtons } from '@/common/themes/Color';
import {
    Stack,
    Box,
    AppBar,
    IconButton,
    Typography,
    Button,
} from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Image from 'next/image';
import LogoImage from '@/assets/Logo/Frame.png';
import ChatIcon from '@mui/icons-material/Chat';
import { useRouter } from 'next/router';
import { TextMenu } from './components/TextMenu/TextMenu';

export const Appbar = () => {
    const router = useRouter();
    const currentRoute = router.pathname;

    const menu = [
        { menuType: 'logo', url: '', title: '', buttonType: '' },
        { menuType: 'blank', url: '', title: '', buttonType: '' },
        { menuType: 'button', url: '/overview', title: 'Overview', buttonType: 'text' },
        { menuType: 'button', url: '/progress', title: 'Progress', buttonType: 'text' },
        { menuType: 'button', url: '/growth', title: 'Growth', buttonType: 'text' },
        { menuType: 'button', url: '/resources', title: 'Resources', buttonType: 'text' },
        { menuType: 'button', url: '/addinsights', title: 'Add Insights', buttonType: 'outline' },
        { menuType: 'icon', url: '', title: '', buttonType: '' },
        { menuType: 'button', url: '/account', title: 'Account', buttonType: 'text' },
    ]

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position='static'
                sx={{ height: 89, background: Colors.BackBlue }}
            >
                <Toolbar component='div' sx={{ height: 89 }}>
                    {
                        menu.map((item, index) => {
                            if(item.menuType === 'button') {
                                return <TextMenu
                                    key={ index }
                                    url={ item.url }
                                    currentRoute={ currentRoute }
                                    title={ item.title }
                                    buttonType={ item.buttonType }
                                />
                            } else if(item.menuType === 'logo') {
                                return <Link
                                    key={ index }
                                    css={{ textDecoration: 'none' }}
                                    href="/overview"
                                >
                                    <Button>
                                        <Logo />
                                    </Button>
                                </Link>
                            } else if(item.menuType === 'blank') {
                                return <Typography
                                    key={ index }
                                    variant='h6'
                                    component='div'
                                    sx={{ flexGrow: 1 }}
                                ></Typography>
                            } else if(item.menuType === 'icon') {
                                return <Link
                                    key={ index }
                                    css={{ textDecoration: 'none' }}
                                    href="/helpmenu"
                                >
                                    <IconButton
                                        size='large'
                                        edge='start'
                                        color='default'
                                        aria-label='menu'
                                        sx={{ mr: 2 }}
                                    >
                                        <ChatIcon />
                                    </IconButton>
                                </Link>
                              }
                        })
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
};

const Logo = () => {
    return (
        <Stack css={{ margin: '0px 0px 0px 0px' }}>
            <Image
                src={ LogoImage }
                alt={ 'img' }
                width={ '150' }
            />
        </Stack>
    );
};
