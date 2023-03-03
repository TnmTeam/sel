import { css } from '@emotion/react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import { FlexBlueButtons, WhiteButtons } from '@/common/themes/Color';
import { axiosClient } from '@/data/client/client';
import React, { useCallback, useEffect } from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { waitForAll } from 'recoil';
import {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from '@/domain/Login/sections/LoginSection/firebaseConfig';

export const SignupSection = () => {
    useEffect(() => {
        localStorage.removeItem('accessToken');
    }, []);

    const handleSubmit = useCallback(
        (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            //console.log(event.currentTarget);
            const name = event.currentTarget.user_name.value;
            const email = event.currentTarget.email.value;
            const role = event.currentTarget.user_role.value;
            const password = event.currentTarget.password.value;

            //console.log(name, email, role, password);

            // firebase 회원가입 진행
            createUserWithEmailAndPassword(auth, email, password)
                .then(async (data) => {
                    // console.log(data);
                    const accessToken = await data.user.getIdToken();
                    // console.log(accessToken);

                    // 가입성공 -> DB signup 진행
                    authSignup(accessToken, name, email, role);

                    localStorage.setItem('accessToken', accessToken);
                    localStorage.setItem('email', email);
                    localStorage.setItem('displayName', name);

                    // 로그인 API 연동
                    authLogin();
                })
                .catch((e) => {                    
                    switch (e.code) {
                        case 'auth/weak-password':
                            alert('Password should be at least 6 characters.');
                            break;
                        case 'auth/invalid-email':
                            alert('Invalid email address.');
                            break;
                        case 'auth/email-already-in-use':
                            //alert('This email is already subscribed.');
                            // 이미 존재할경우 SEL DB에 회원가입 진행
                            firebaseLogin( name, email, password, role);
                            break;
                        default:
                            alert(
                                'Login failed. Please check your ID and password.'
                            );
                            break;
                    }
                });
        },
        []
    );


    const firebaseLogin = (name:string, email:string, password:string, role:string) => {

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

                    // firebase 로그인 -> DB signup 진행
                    authSignup(accessToken, name, email, role);
                    
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


    };

    const authLogin = async () => {
        const response = await axiosClient('/auth/login');
        if (response.data.status_code == 500) {
            // Expired toekn
            //console.log(response.data.message);
            alert(response.data.message);
        } else if (response.data.status_code == 400) {
            // 로그인 시도 성공
            // Account Already Exists!!
            // or
            // Account Does Not Exist!!
            //console.log(response.data.message);
            const authEmail = await response.data.email;
        } else {
            // 정상 로그인
            var email_param = {
                email: response.data.email,
            };
        }
    };

    const authSignup = async (
        accessToken: string,
        name: string,
        email: string,
        role: string
    ) => {
        localStorage.setItem('accessToken', accessToken);
        const password = '';
        var params = {
            name,
            email,
            role,
            password,
        };

        // 회원 가입 성공
        const response = await axiosClient.post('/auth/signup', params);
        //console.log(response);

        const authEmail = await response.data.email;
        if (email == authEmail) {
            alert('[' + email + ']' + ' Signed up Complete.');
            location.href = '/';
        }
    };


    return (
        <Grid item xs={12} sm={6} md={6}>
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

                <Typography component='h1' variant='h6' sx={{ mb: 3 }}>
                    - Sign Up -
                </Typography>
                <Box component='form' noValidate onSubmit={handleSubmit}>
                    <TextField
                        margin='normal'
                        required
                        fullWidth
                        id='user_name'
                        label='Name'
                        name='user_name'
                        autoComplete='user_name'
                        autoFocus
                    />
                    <TextField
                        margin='normal'
                        required
                        fullWidth
                        id='email'
                        label='Email'
                        name='email'
                        autoComplete='email'
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
                    <Box>
                        Role
                        <TextField
                            margin='normal'
                            required
                            fullWidth
                            name='user_role'
                            label='Role'
                            id='user_role'
                            value={'parent'}
                            aria-readonly
                        />
                    </Box>
                    <Box flexDirection={'row'} textAlign={'center'}>
                        <Button
                            variant='contained'
                            sx={{
                                margin: 'auto',
                                mr: 3,
                                fontSize: '18pt',
                                width: '200px',
                                background: WhiteButtons.ButtonColor,
                                color: WhiteButtons.TextColor,
                                ':hover': {
                                    background: WhiteButtons.onHoverButtonColor,
                                    color: WhiteButtons.OnHoverTextColor,
                                },
                            }}
                            href='/'
                        >
                            Cancle
                        </Button>
                        <Button
                            type='submit'
                            variant='contained'
                            sx={{
                                margin: 'auto',
                                ml: 3,
                                fontSize: '18pt',
                                width: '200px',
                                background: FlexBlueButtons.ButtonColor,
                                color: FlexBlueButtons.TextColor,
                                ':hover': {
                                    background:
                                        FlexBlueButtons.onHoverButtonColor,
                                    color: FlexBlueButtons.OnHoverTextColor,
                                },
                            }}
                        >
                            Sign Up
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Grid>
    );
};

const sx = {
    sample: css``,
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
