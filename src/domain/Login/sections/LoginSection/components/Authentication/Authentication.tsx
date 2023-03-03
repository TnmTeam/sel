import { css } from '@emotion/react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from 'next/link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { FlexBlueButtons, WhiteButtons } from '@/common/themes/Color';

import React, { useCallback, useState, useEffect } from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import {
    auth,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
} from '../../firebaseConfig';

import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';

import { axiosClient } from '@/data/client/client';
import { useSetRecoilState, useRecoilValue, useRecoilState } from 'recoil';
import { loginInfo } from '@/common/atom/Atom';
import Image from 'next/image';
import GoogleLogo from '@/assets/login/google_logo_icon.png';
import router from 'next/router';

export const Authentication = () => {
    const loginInfoHandlerState = useSetRecoilState(loginInfo);

    const [findEmail, setFindEmail] = useState('');

    const [buttonHidden, setButtonHidden] = useState<string>('');

    useEffect(() => {
        localStorage.removeItem('accessToken');
        localStorage.clear();
    }, []);

    const onChangeEmail = (e:any) => {        
        if(isEmail(e.target.value))
            setFindEmail( e.target.value);
      };

    const isEmail = (email:string) => {
        const emailRegex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
      
        return emailRegex.test(email);
      };

    // reset password
    const triggerResetEmail = async () => {        
        if ( isEmail(findEmail) && findEmail != '') {
            await sendPasswordResetEmail(auth, findEmail);
            alert('[ ' + findEmail + ' ] ' + 'Password reset email sent');
            console.log('Password reset email sent');
        } else {
            alert('Please enter your email.');
        }
    };

    // General Login ////////////////////////////////////////////////////////////////////////////////////
    const handleLoginSubmit = useCallback(
        (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            //console.log(event.currentTarget);
            const email = event.currentTarget.email.value;
            const password = event.currentTarget.password.value;

            if (email != '') setFindEmail(email);
            else return;

            //console.log(email, password);
            // firebase 로그인 진행
            signInWithEmailAndPassword(auth, email, password)
                .then(async (data) => {
                    // firebase 일반 로그인 시도
                    //console.log(data);
                    const accessToken = await data.user.getIdToken();
                    // console.log(accessToken);
                    localStorage.setItem('accessToken', accessToken);
                    if (data.user.email != null)
                        localStorage.setItem('email', await data.user.email);
                    //displayName 이름 정보를 어떻게 가져올것인지..
                    //console.log('localStorage', localStorage);

                    // 로그인 성공
                    generalLogin();
                })
                .catch((err) => {
                    switch (err.code) {
                        case 'auth/user-disabled':
                            alert('This email has been deprecated.');
                            break;
                        case 'auth/user-not-found':
                            alert('This email does not exist.');
                            break;
                        default:
                            alert(
                                'Login failed. Please check your ID and password.'
                            );
                            break;
                    }
                    console.log(err);
                });
        },
        []
    );

    const [userData, setUserData] = useState(null);
    function handleGoogleLogin() {
        const provider = new GoogleAuthProvider(); // provider를 구글로 설정
        signInWithPopup(auth, provider) // popup을 이용한 signup
            .then(async (data) => {
                //console.log(data);
                //console.log(data.user);
                const accessToken = await data.user.getIdToken();
                // 만료되었거나 5분 이내 완료이면 새로 발급해오는 듯?
                //console.log(localStorage);
                localStorage.setItem('accessToken', accessToken);
                if (data.user.email != null)
                    localStorage.setItem('email', await data.user.email);
                if (data.user.displayName != null)
                    localStorage.setItem(
                        'displayName',
                        await data.user.displayName
                    );
                if (data.user.displayName != null)
                    localStorage.setItem('uid', await data.user.uid);
                //console.log('localStorage', localStorage);

                // 로그인 API 연동
                authLogin();
                //location.href='/overview';
            })
            .catch((err) => {
                console.log(err);
            });
    }

    // 일반 firebase 로그인
    const generalLogin = async () => {
        const response = await axiosClient('/auth/login');
        if (response.data.status_code == 500) {
            // Expired toekn
            //console.log(response.data.message);
            alert(response.data.message);
        } else if (response.data.status_code == 400) {
            // Account Does Not Exist!!
            //console.log(response.data.message);
            alert(response.data.message);
        } else {
            // 정상 로그인
            var email_param = {
                email: response.data.email,
            };

            loginInfoHandlerState(email_param);

            router.push({ pathname: '/select' });

            // overview 화면 이동
            //            location.href='/overview';
        }
    };

    const authLogin = async () => {
        const response = await axiosClient('/auth/login');
        if (response.data.status_code == 500) {
            // Expired toekn
            console.log(response.data.message);
            alert(response.data.message);
        } else if (response.data.status_code == 400) {
            // 로그인 시도 성공
            // Account Already Exists!!
            // or
            // Account Does Not Exist!!

            console.log(response.data.message);

            const authEmail = await response.data.email;

            authSignup();
            /*
            if (localStorage.getItem('email') == authEmail) {
                // 회원 가입 성공
                localStorage.setItem('role', await response.data.role);
                //location.href = '/overview';  // 페이지 이동
                //location.href = '/select'; // 학생/코스 선택 화면 이동
                authSignup();
            } else {
                localStorage.setItem('role', await response.data.role);
                //location.href = '/overview';  // 페이지 이동
                //location.href = '/select'; // 학생/코스 선택 화면 이동
            }
            */
        } else {
            // 정상 로그인
            var email_param = {
                email: response.data.email,
            };

            setButtonHidden(() => response.data.email);
            loginInfoHandlerState(email_param);

            router.push({ pathname: '/select' });
        }
    };

    const authSignup = async () => {
        const name = localStorage.getItem('displayName');
        const email = localStorage.getItem('email');
        const role = 'parent';
        const password = '';
        var params = {
            name,
            email,
            role,
            password,
        };

        // 자동으로 회원 가입( 2.23 임시)
        const response = await axiosClient.post('/auth/signup', params);
        //console.log(response);

        const authEmail = await response.data.email;
        if (localStorage.getItem('email') == authEmail) {
            // 회원 가입 성공
            localStorage.setItem('role', await response.data.role);
            //location.href = '/overview';  // 페이지 이동
            //location.href = '/select'; // 학생/코스 선택 화면 이동
            setButtonHidden(() => response.data.email);
        }

        //location.href = '/signup';
    };

    const MoveSelectView = () => {
        //console.log('MoveSelectView');
        //console.log(localStorage.getItem('email'));

        if (localStorage.getItem('email') == null)
            alert('google account link!');

        var email_param = {
            email: localStorage.getItem('email'),
        };
        loginInfoHandlerState(email_param);
    };

    const MoveSelectView_demo = () => {
        var email_param = {
            email: 'josharnold@gmail.com',
        };
        loginInfoHandlerState(email_param);
    };

    const MoveSelectView_admin = () => {
        var email_param = {
            email: 'admin',
        };
        loginInfoHandlerState(email_param);
    };

    return (
        <Grid
            item
            xs={12}
            sm={6}
            component={Paper}
            elevation={6}
            square
            height={'100%'}
        >
            <Box
                flexDirection={'column'}
                alignItems={'center'}
                display={'flex'}
                sx={{
                    mx: 25,
                    mt: 30,
                    //mb: 15,
                }}
            >
                <Typography
                    component='h1'
                    variant='h3'
                    textAlign='center'
                    sx={{ mb: 2, fontSize: 25 }}
                >
                    Welcome Parents!
                </Typography>

                <Grid
                    item
                    flexDirection={'row'}
                    alignItems={'center'}
                    display={'flex'}
                    sx={{ mb: 2 }}
                >
                    <Link href='#' onClick={handleGoogleLogin}>
                        <Avatar
                            sx={{
                                mb: 1,
                                // bgcolor: 'secondary.main',
                                bgcolor: 'transparent',
                                width: '50px',
                                height: '50px',
                                border: '1px solid #d3d3d3',
                            }}
                        >
                            {/* <GoogleIcon /> */}
                            <Image
                                src={GoogleLogo}
                                alt='googleIcon'
                                width={30}
                                height={30}
                            />
                        </Avatar>
                    </Link>
                </Grid>
                {/*
                {buttonHidden == '' ? (
                    <></>
                ) : (
                    <Link
                        id='loginBtn'
                        type='submit'
                        onClick={MoveSelectView}
                        href='/select'
                        style={{ textDecoration: 'none' }}
                    >
                        <Button
                            type='submit'
                            fullWidth
                            variant='contained'
                            sx={{
                                mb: 1,
                                fontSize: '12pt',
                                width: '350px',
                                background: FlexBlueButtons.ButtonColor,
                                color: FlexBlueButtons.TextColor,
                                ':hover': {
                                    background:
                                        FlexBlueButtons.onHoverButtonColor,
                                    color: FlexBlueButtons.OnHoverTextColor,
                                },
                            }}
                        >
                            {buttonHidden}
                        </Button>
                    </Link>
                )}
                {buttonHidden != '' ? (
                    <></>
                ) : (
                    <Link
                        id='loginBtn'
                        type='submit'
                        onClick={MoveSelectView_demo}
                        href='/select'
                        style={{ textDecoration: 'none' }}
                    >
                        <Button
                            type='submit'
                            fullWidth
                            variant='contained'
                            sx={{
                                mb: 3,
                                fontSize: '16px',
                                width: '350px',
                                background: FlexBlueButtons.ButtonColor,
                                color: FlexBlueButtons.TextColor,
                                ':hover': {
                                    background:
                                        FlexBlueButtons.onHoverButtonColor,
                                    color: FlexBlueButtons.OnHoverTextColor,
                                },
                            }}
                        >
                            josharnold@gmail.com
                        </Button>
                    </Link>
                )}
                {buttonHidden != '' ? (
                    <></>
                ) : (
                    <Link
                        id='loginBtn'
                        type='submit'
                        onClick={MoveSelectView_admin}
                        href='/select'
                        style={{ textDecoration: 'none' }}
                    >
                        <Button
                            type='submit'
                            fullWidth
                            variant='contained'
                            sx={{
                                mb: 1,
                                fontSize: '16px',
                                width: '350px',
                                background: FlexBlueButtons.ButtonColor,
                                color: FlexBlueButtons.TextColor,
                                ':hover': {
                                    background:
                                        FlexBlueButtons.onHoverButtonColor,
                                    color: FlexBlueButtons.OnHoverTextColor,
                                },
                            }}
                        >
                            admin
                        </Button>
                    </Link>
                )}
                        */}
                <Box
                    component='form'
                    noValidate
                    onSubmit={handleLoginSubmit}
                    width={'350px'}
                >
                    <TextField
                        margin='normal'
                        required
                        fullWidth
                        id='email'
                        label={<span css={sx.inputbox}>Email</span>}
                        name='email'
                        autoComplete='email'
                        onChange={onChangeEmail}
                        autoFocus
                    />
                    <TextField
                        margin='normal'
                        required
                        fullWidth
                        name='password'
                        label={<span css={sx.inputbox}>Password</span>}
                        type='password'
                        id='password'
                        autoComplete='current-password'
                    />
                    {/*
                    <FormControlLabel
                        control={<Checkbox value='remember' color='primary' />}
                        label={<Typography css={sx.rememberLabel}>Remember me</Typography>}
                    />
                    */}
                    <Link
                        href='#'
                        css={sx.forgotButton}
                        onClick={triggerResetEmail}
                        style={{ marginLeft: '225px' }}
                    >
                        Forgot password?
                    </Link>

                    <Button
                        type='submit'
                        fullWidth
                        variant='contained'
                        sx={{
                            mt: 1,
                            mb: 2,
                            fontSize: '16px',
                            width: '350px',
                            background: FlexBlueButtons.ButtonColor,
                            color: FlexBlueButtons.TextColor,
                            ':hover': {
                                background: FlexBlueButtons.onHoverButtonColor,
                                color: FlexBlueButtons.OnHoverTextColor,
                            },
                            textTransform: 'none',
                        }}
                    >
                        Login
                    </Button>
                </Box>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Link href='/signup' css={sx.forgotButton}>
                    <span css={sx.SignupBf}>
                        Don&apos;t have an account yet?
                    </span>
                    &nbsp;&nbsp;
                    <span css={sx.SignupAf}>Create an account.</span>
                </Link>
            </Box>
            {/*
            <Box sx={{position:'fixed', bottom : 0, right: 0}}>
                <Link
                    id='loginBtn'
                    type='submit'
                    onClick={MoveSelectView_demo}
                    href='/select'
                    style={{ textDecoration: 'none' }}
                >
                    <Button
                        type='submit'
                        fullWidth
                        variant='contained'
                        sx={{                          
                            fontSize: '16px',
                            mb : 1,                            
                            background: FlexBlueButtons.ButtonColor,
                            color: FlexBlueButtons.TextColor,
                            ':hover': {
                                background: FlexBlueButtons.onHoverButtonColor,
                                color: FlexBlueButtons.OnHoverTextColor,
                            },
                        }}
                    >
                        josharnold@gmail.com
                    </Button>
                </Link>

                <Link
                    id='loginBtn'
                    type='submit'
                    onClick={MoveSelectView_admin}
                    href='/select'
                    style={{ textDecoration: 'none' }}
                >
                    <Button
                        type='submit'
                        fullWidth
                        variant='contained'
                        sx={{
                         
                            fontSize: '16px',
                           
                            background: FlexBlueButtons.ButtonColor,
                            color: FlexBlueButtons.TextColor,
                            ':hover': {
                                background: FlexBlueButtons.onHoverButtonColor,
                                color: FlexBlueButtons.OnHoverTextColor,
                            },
                        }}
                    >
                        admin
                    </Button>
                </Link>
            </Box>
            */}
        </Grid>
    );

    /*
    return (
        <Grid item xs={12} sm={6} md={6} component={Paper} elevation={6} square>
            <Box
                flexDirection={'column'}
                alignItems={'center'}
                display={'flex'}
                sx={{
                    mx: 25,
                    mt: 20,
                    mb: 25,
                }}
            >
                <Typography
                    component='h1'
                    variant='h3'
                    textAlign='center'
                    sx={{ mb: 3 }}
                >
                    Welcome Parents!
                </Typography>

                <Grid
                    item
                    flexDirection={'row'}
                    alignItems={'center'}
                    display={'flex'}
                    sx={{ mb: 3 }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main', width:'50px', height:'50px' }}>
                        <FacebookSharpIcon />
                    </Avatar>
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main', width:'50px', height:'50px' }}>
                        <TwitterIcon />
                    </Avatar>
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main', width:'50px', height:'50px' }}>
                        <LinkedInIcon />
                    </Avatar>
                    <Link href='#' onClick={handleGoogleLogin}>
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main', width:'50px', height:'50px' }}>
                            <GoogleIcon />
                        </Avatar>
                    </Link>
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main', width:'50px', height:'50px' }}>
                        <AppleIcon />
                    </Avatar>
                </Grid>

                <Typography component='h1' variant='h6' sx={{ mb: 3 }}>
                    - or -
                </Typography>
                <Box component='form' noValidate onSubmit={handleSubmit}>
                    <TextField
                        margin='normal'
                        required
                        fullWidth
                        id='email'
                        label='Email'
                        name='email'
                        autoComplete='email'
                        autoFocus
                    />
                    <TextField
                        margin='normal'
                        required
                        fullWidth
                        name='password'
                        label='Password'
                        type='password'
                        id='password'
                        autoComplete='current-password'
                    />

                    <FormControlLabel
                        control={<Checkbox value='remember' color='primary' />}
                        label='Remember me'
                    />
                    <Link href='#' textAlign={'right'}>
                        Forgot password?
                    </Link>

                    <Button
                        type='submit'
                        fullWidth
                        variant='contained'
                        sx={{
                            mt: 3,
                            mb: 2,
                            fontSize: '18pt',
                            background: FlexBlueButtons.ButtonColor,
                            color: FlexBlueButtons.TextColor,
                            ':hover': {
                                background: FlexBlueButtons.onHoverButtonColor,
                                color: FlexBlueButtons.OnHoverTextColor,
                            },
                        }}
                        href='/overview'
                    >
                        Login
                    </Button>
                    
                    <Button
                        fullWidth
                        variant='contained'
                        onClick={apiTest}
                    >
                        API test
                    </Button>
                </Box>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Link href='#' style={{ marginTop: 10 }}>
                    {"Don't have an account yet? Signup for a course."}
                </Link>
            </Box>
        </Grid>
    );
    */
};

const sx = {
    rememberLabel: css`
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 24px;
        /* identical to box height, or 171% */
        color: #4f5b70;
    `,
    forgotButton: css`
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        color: #6787b7;
        text-decoration-line: none;
        text-transform: none;
    `,
    inputbox: css`
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #4f5b70;
    `,
    SignupBf: css`
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: #4f5b70;
    `,
    SignupAf: css`
        font-family: 'DM Sans';
        font-style: normal;
        font-size: 14px;
        line-height: 22px;
    `,
};

const Copyright = () => {
    return (
        <Typography variant='body2' color='text.secondary' align='center'>
            {'Copyright © '}
            <Link color='inherit' href='https://mui.com/'>
                ##########
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
};
