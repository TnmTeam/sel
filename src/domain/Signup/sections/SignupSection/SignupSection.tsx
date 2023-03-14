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
import React, { useCallback, useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from '@/domain/Login/sections/LoginSection/firebaseConfig';
import router from 'next/router';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export const SignupSection = () => {
    useEffect(() => {
        localStorage.removeItem('accessToken');
    }, []);

    const [loading, setLoading] = useState(false);
    const [password, setPassword] = useState<string>('');
    const [passwordConfirm, setPasswordConfirm] = useState<string>('');
    const [isPassword, setIsPassword] = useState<boolean>(false);

    const onChangePassword = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const password = e.target.value;
            setPassword(password);
        },
        []
    );

    const onChangePasswordConfirm = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const passwordConfirm = e.target.value;
            setPasswordConfirm(passwordConfirm);
        },
        []
    );

    useEffect(() => {
        // checkPswd의 길이가 0을 넘어갔을 때부터 실행되게 함
        // 그렇지 않으면 첫 랜더링때부터 checkPswdMessage가 보이게됨.
        if (password === passwordConfirm) {
            setIsPassword(true);
        } else {
            setIsPassword(false);
        }
    }, [password, passwordConfirm, isPassword]);

    const handleSubmit = useCallback(
        async (event: React.FormEvent<HTMLFormElement>) => {
            setLoading(true); // loading bar start
            event.preventDefault();
            const name = event.currentTarget.user_name.value;
            const email = event.currentTarget.email.value;
            const role = 'parent';
            const password = event.currentTarget.password.value;
            const password_confirm = event.currentTarget.password_confirm.value;

            if (name == '') {                
                alert('Please check your name.');
                setLoading(false); // loading bar stop
                return;
            }

            if (email == '') {
                alert('Please check your email.');
                setLoading(false); // loading bar stop
                return;
            }

            if (password != password_confirm) {
                alert('Please check your password again.');
                setLoading(false); // loading bar stop
                return;
            }

            const validateEmailCheck = validateEmail(email);
            
            if( await validateEmailCheck ){
                 // firebase 회원가입 진행
                createUserWithEmailAndPassword(auth, email, password)
                .then(async (data) => {
                    const accessToken = await data.user.getIdToken();

                    // 가입성공 -> DB signup 진행
                    authSignup(accessToken, name, email, role);
                })
                .catch((e) => {
                    switch (e.code) {
                        case 'auth/weak-password':
                            alert('Password should be at least 6 characters.');
                            setLoading(false); // loading bar stop
                            break;
                        case 'auth/invalid-email':
                            alert('Invalid email address.');
                            setLoading(false); // loading bar stop
                            break;
                        case 'auth/email-already-in-use':
                            //alert('This email is already subscribed.');
                            // 이미 존재할경우 SEL DB에 회원가입 진행
                            firebaseLogin(name, email, password, role);
                            break;
                        default: // loading bar stop
                            alert(
                                'Login failed. Please check your ID and password.'
                            );
                            setLoading(false);
                            break;
                    }
                });
            }else {
                setLoading(false);
                setOpen(true);
            }
           
        },
        []
    );

    const validateEmail = async (email: any) => {

        var param = { 
            parent_email : email
        };

        const response = await axiosClient.post(`/navigation/student-list`, param);
        const data = response.data;

        let result = true;
        if ( data.length == 0 ) result = false;

        return result;
    }

    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClose = () => {
        setOpen(false);
    };

    const firebaseLogin = (
        name: string,
        email: string,
        password: string,
        role: string
    ) => {
        // firebase 로그인 진행
        signInWithEmailAndPassword(auth, email, password)
            .then(async (data) => {
                // firebase 일반 로그인 시도
                const accessToken = await data.user.getIdToken();
                localStorage.setItem('accessToken', accessToken);
                if (data.user.email != null)
                    localStorage.setItem('email', await data.user.email);

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
                setLoading(false); // loading bar stop
                console.log(err);
            });
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

        if (response.data.status_code == 500) {
            // Expired toekn
            alert(response.data.message);
            setLoading(false); // loading bar stop
        } else if (response.data.status_code == 400) {
            // 이미 가입되어 있는 계정입니다.
            alert(response.data.message);
            setLoading(false); // loading bar stop
        } else {
            // 정상 로그인

            const authEmail = await response.data.email;
            if (email == authEmail) {
                alert('"' + email + '" ' + 'Signed up Complete.');

                localStorage.clear();
                router.push({pathname: "/"});
            }
            setLoading(false); // loading bar stop
        }
    };

    return (
        <Grid
            item
            xs={12}            
            sm={12}            
            md={6}
            xl={6}
            height={'100%'}
        >
            <Box
                flexDirection={'column'}
                alignItems={'center'}
                display={'flex'}
                sx={{
                    mt: 28,
                    //mb: 15,
                }}
            >
                <Typography
                    component='h1'
                    variant='h3'
                    textAlign='center'
                    sx={{ mb: 2, fontSize: 25 }}
                >
                    Impacter Pathway<br></br>Parent Dashboard
                </Typography>

                <Grid
                    item
                    flexDirection={'row'}
                    alignItems={'center'}
                    display={'flex'}
                    sx={{ mb: 2 }}
                >
                   - Sign Up -
                </Grid>                
                <Box
                    component='form'
                    noValidate
                    onSubmit={handleSubmit}
                    width={'350px'}
                >
                    <TextField
                        disabled={loading}
                        margin='normal'
                        required
                        fullWidth
                        id='user_name'
                        label={<span css={sx.inputbox}>Name</span>}
                        name='user_name'
                        autoComplete='user_name'
                        autoFocus
                        focused
                    />
                    <TextField
                        disabled={loading}
                        margin='normal'
                        required
                        fullWidth
                        id='email'
                        label={<span css={sx.inputbox}>Email</span>}
                        name='email'
                        autoComplete='email'
                        focused
                    />
                    <TextField
                        disabled={loading}
                        margin='normal'
                        required
                        fullWidth
                        name='password'
                        label={<span css={sx.inputbox}>Password</span>}
                        type='password'
                        id='password'
                        autoComplete='current-password'
                        onChange={onChangePassword}
                        focused
                    />
                    <TextField
                        margin='normal'
                        required
                        fullWidth
                        name='password_confirm'
                        label={<span css={sx.inputbox}>Password_confirm</span>}
                        type='password'
                        id='password_confirm'
                        autoComplete='current-password'
                        onChange={onChangePasswordConfirm}
                        style={
                            isPassword
                                ? { backgroundColor: 'rgba(0,0,0,0.5)' }
                                : {}
                        }
                        
                    />

                    <Button
                        variant='contained'
                        disabled={loading}
                        sx={{
                            mt: 3,
                            fontSize: '16px',
                            width: '50%',
                            background: WhiteButtons.ButtonColor,
                            color: WhiteButtons.TextColor,
                            ':hover': {
                                background: WhiteButtons.onHoverButtonColor,
                                color: WhiteButtons.OnHoverTextColor,
                            },
                            textTransform: 'none',
                        }}
                        href='/'
                    >
                        Cancel
                    </Button>
                    <Button
                        type='submit'
                        variant='contained'
                        disabled={loading}
                        sx={{
                            mt: 3,
                            fontSize: '16px',
                            width: '50%',
                            background: FlexBlueButtons.ButtonColor,
                            color: FlexBlueButtons.TextColor,
                            ':hover': {
                                background: FlexBlueButtons.onHoverButtonColor,
                                color: FlexBlueButtons.OnHoverTextColor,
                            },
                            textTransform: 'none',
                        }}
                    >
                        Sign Up
                    </Button>
                    <Dialog
                        fullScreen={fullScreen}
                        open={open}
                        onClose={handleClose}
                        aria-labelledby='responsive-dialog-title'                              
                        sx={{ '& .MuiDialog-paper' : { maxWidth:'730px'}}} 
                        >                  
                        <DialogTitle
                            id='responsive-dialog-title'
                            sx={{ width: '730px', fontWeight: 'bold', textAlign: 'center', mt:1}}
                        >
                            {'Unfortunately, that email is not listed in our Student/Parent Database.'}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText
                                sx={{
                                    whiteSpace: 'pre-wrap',
                                    textAlign: 'center',
                                    mt:3,
                                }}
                            >
                                
                                Please try again with an email you used when registering for Impacter Pathway.
                            </DialogContentText>
                            
                            
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} autoFocus>
                                Close
                            </Button>
                        </DialogActions>
                    </Dialog>
                    {loading && (
                        <CircularProgress
                            size={40}
                            sx={{
                                color: 'red',
                                position: 'absolute',
                                top: '72%',
                                right: '19.5%',
                                marginTop: '-12px',
                                marginLeft: '-12px',
                            }}
                        />
                    )}
                </Box>
            </Box>            
        </Grid>
    );
};

const sx = {
    sample: css``,
    inputbox: css`
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #4f5b70;
    `,
};


