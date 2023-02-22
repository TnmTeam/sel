import { css } from '@emotion/react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { FlexBlueButtons, WhiteButtons } from '@/common/themes/Color';

import React, { useState, useEffect } from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';

import { axiosClient } from '@/data/client/client';

export const SignupSection = () => {
    useEffect(() => {
        localStorage.removeItem('accessToken');
    }, []);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    const authLogin = async () => {
        const response = await axiosClient('/auth/login');
        if (response.data.status_code == 500) {
            // Expired toekn
            console.log(response.data.message);
        } else if (response.data.status_code == 400) {
            // Account Does Not Exist
            console.log(response.data.message);

            // 자동으로 회원 가입( 2.23 임시)
            authSignup();
            // 회원 가입 페이지 자동 이동
            //location.href='/signup';
        } // 로그인 성공
        else {
            const authEmail = await response.data.email;
            if (localStorage.getItem('email') == authEmail) {
                // 회원 가입 성공
                localStorage.setItem('role', await response.data.role);
                location.href = '/overview'; // 페이지 이동
            }
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
        console.log(response);

        const authEmail = await response.data.email;
        if (localStorage.getItem('email') == authEmail) {
            // 회원 가입 성공
            localStorage.setItem('role', await response.data.role);
            location.href = '/overview'; // 페이지 이동
        }

        // 회원 가입 페이지 자동 이동 2.23 이후 제작 예정
        // location.href='/signup';
    };

    const moveOverview = async () => {
        localStorage.setItem('accessToken', '');
        localStorage.setItem('email', 'bessietsang@hotmail.com');
        localStorage.setItem('displayName', 'test');
        localStorage.setItem('uid', '');
        location.href = '/overview';
    };

    return (
        <Grid item xs={12} sm={6} md={6} >
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
                        id='name'
                        label='Name'
                        name='name'
                        autoComplete='name'
                        autoFocus
                    />

                    <Button
                        type='submit'                        
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
                        href='/'
                    >
                        Cancle
                    </Button>
                    <Button
                        type='submit'
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
                        Sign Up
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
