import { ClassNames, css } from '@emotion/react';
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

export const Appbar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position='static'
                sx={{ height: 89, background: Colors.BackBlue }}
            >
                <Toolbar component='div' sx={{ height: 89 }}>
                    <Button href='/overview'>
                        <Logo />
                    </Button>
                    <Typography
                        variant='h6'
                        component='div'
                        sx={{ flexGrow: 1 }}
                    ></Typography>

                    <Button
                        sx={{
                            fontSize: '16pt',
                            textTransform: 'none',
                            marginRight: '40px',
                            color: NavigationItems.TextColor,
                            ':hover': {
                                color: NavigationItems.OnHoverTextColor,
                            },
                        }}
                        color='primary'
                        href='/overview'
                    >
                        Overview
                    </Button>
                    <Button
                        sx={{
                            fontSize: '16pt',
                            textTransform: 'none',
                            marginRight: '40px',
                            color: NavigationItems.TextColor,
                            ':hover': {
                                color: NavigationItems.OnHoverTextColor,
                            },
                        }}
                        color='inherit'
                        href='/progress'
                    >
                        Progress
                    </Button>
                    <Button
                        sx={{
                            fontSize: '16pt',
                            textTransform: 'none',
                            marginRight: '40px',
                            color: NavigationItems.TextColor,
                            ':hover': {
                                color: NavigationItems.OnHoverTextColor,
                            },
                        }}
                        color='inherit'
                        href='/growth'
                    >
                        Growth
                    </Button>
                    <Button
                        sx={{
                            fontSize: '16pt',
                            textTransform: 'none',
                            marginRight: '40px',
                            color: NavigationItems.TextColor,
                            ':hover': {
                                color: NavigationItems.OnHoverTextColor,
                            },
                        }}
                        color='inherit'
                        href='/resources'
                    >
                        Resources
                    </Button>
                    <Button
                        sx={{
                            fontSize: '18pt',
                            backgroundColor: WhiteButtons.ButtonColor,
                            color: WhiteButtons.TextColor,
                            ':hover': {
                                backgroundColor:
                                    WhiteButtons.onHoverButtonColor,
                                color: WhiteButtons.OnHoverTextColor,
                                border: '0',
                            },
                            border: '0',
                        }}
                        href='/addinsights'
                        variant='outlined'
                    >
                        Add Insights
                    </Button>
                    <IconButton
                        size='large'
                        edge='start'
                        color='inherit'
                        aria-label='menu'
                        sx={{ mr: 2 }}
                        href='/helpmenu'
                    >
                        <ChatIcon />
                    </IconButton>

                    <Button
                        sx={{
                            fontSize: '16pt',
                            textTransform: 'none',
                            marginRight: '40px',
                            color: NavigationItems.TextColor,
                            ':hover': {
                                color: NavigationItems.OnHoverTextColor,
                            },
                        }}
                        color='inherit'
                        href='/account'
                    >
                        Account
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

const st = {
    logoImage: css`
        margin: 0px 0px 0px 0px;
    `,
};

const Logo = () => {
    return (
        <Stack css={st.logoImage}>
            <Image
                objectFit='cover'
                src={LogoImage}
                alt={'img'}
                width={'150'}
            />
        </Stack>
    );
};
