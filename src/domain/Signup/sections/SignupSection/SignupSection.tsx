import { css } from '@emotion/react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { FlexBlueButtons, WhiteButtons } from '@/common/themes/Color';
import { axiosClient } from '@/data/client/client';
import React, { useCallback, useEffect } from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { waitForAll } from 'recoil';

export const SignupSection = () => {
    useEffect(() => {
        localStorage.removeItem('accessToken');
    }, []);

    const handleSubmit = useCallback(
        (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            console.log(event.currentTarget);
            const name = event.currentTarget.user_name.value;
            const email = event.currentTarget.email.value;
            const role = event.currentTarget.user_role.value;
            const password = event.currentTarget.password.value;
            console.log(name, email, role, password);

            // firebase 회원가입 진행

            // 가입성공 -> DB signup 진행
            const accessToken = '';
            //authSignup(accessToken, name, email, role);
        },
        []
    );

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
