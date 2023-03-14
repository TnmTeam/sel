import { css } from '@emotion/react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { FlexBlueButtons } from '@/common/themes/Color';
import CircularProgress from '@mui/material/CircularProgress';
import React, { useCallback, useState, useEffect } from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import {
    auth,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
} from '../../firebaseConfig';
import { loginInfo, studentCourseArray } from '@/common/atom/Atom';

import { axiosClient } from '@/data/client/client';
import { useSetRecoilState } from 'recoil';
import Image from 'next/image';
import GoogleLogo from '@/assets/login/google_logo_icon.png';
import router from 'next/router';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useCookies } from 'react-cookie';
import { Stack } from '@mui/material';

var checkId = false;
var remRogIds: string = '';

export const Authentication = () => {
    const loginInfoHandlerState = useSetRecoilState(loginInfo);

    //const studentMapHandlerState = useSetRecoilState(studentMapState);
    const studentMapHandlerState = useSetRecoilState(studentCourseArray);

    const [loading, setLoading] = useState(false);

    const [cookies, setCookie, removeCookie] = useCookies(['remRogId']);

    const [rememberId, setRemember] = useState(false);
    useEffect(() => {
        localStorage.removeItem('accessToken');
        localStorage.clear();

        if (
            typeof cookies.remRogId !== 'undefined' &&
            cookies.remRogId !== ''
        ) {
            checkId = true;
            setRemember(checkId);
        }
    }, []);

    if (typeof cookies.remRogId !== 'undefined' && cookies.remRogId !== '') {
        remRogIds = cookies.remRogId;
    }

    const validateEmail = async (email: any) => {
        var param = {
            parent_email: email,
        };

        const response = await axiosClient.post(
            `/navigation/student-list`,
            param
        );
        const data = response.data;

        let result = true;
        if (data.length == 0) result = false;

        return result;
    };

    const [open, setOpen] = useState(false);
    const [openStudentCheck, setOpenStudentCheck] = useState(false);
    const [forgotPwReason, setforgotPwReason] = useState('');
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const [emailCheckFlag, setEmailCheckFlag] = useState(false);
    const [emailCheckButtonFlag, setEmailCheckButtonFlag] = useState(true);
    const [passwordSendFlag, setPasswordSendFlag] = useState(false);
    const [passwordMent, setPasswordMent] = useState(
        'Please enter your email to reset your password.'
    );

    const handleClickOpen = () => {
        setOpen(true);
        setforgotPwReason('');
        setEmailCheckFlag(true);
        setEmailCheckButtonFlag(true);
        setPasswordMent('Please enter your email to reset your password.');
        setPasswordSendFlag(false);
    };
    const [findEmailCheck, setFindEmailCheck] = useState('');

    const onChangeEmailCheck = useCallback(
        async (e: React.ChangeEvent<HTMLInputElement>) => {
            setFindEmailCheck(e.target.value);
            if (findEmailCheck != '') {
                if (CheckEmail(findEmailCheck)) {
                    //setforgotPwReason('[ '+ findEmailCheck +' ] Password reset email sent.');

                    //  await sendPasswordResetEmail(auth, findEmailCheck);
                    setEmailCheckFlag(true);
                    setLoading(false);
                    setEmailCheckButtonFlag(false);
                } else {
                    setforgotPwReason('Invalid email format');
                    setEmailCheckFlag(false);
                    setLoading(false);
                    setEmailCheckButtonFlag(true);
                }
            } else {
                setforgotPwReason('Invalid email format');
                setEmailCheckFlag(false);
                setLoading(false);
                setEmailCheckButtonFlag(true);
            }
        },
        [findEmailCheck]
    );

    const handleClose = () => {
        setOpen(false);
    };

    const handleStudentCheckClose = () => {
        setOpenStudentCheck(false);
    };

    const handleAgree = async () => {
        setLoading(true);
        try {
            if (emailCheckFlag) {
                await sendPasswordResetEmail(auth, findEmailCheck);

                setPasswordMent(
                    '"' + findEmailCheck + '" ' + 'Password reset email sent'
                );
                setLoading(false);
                setEmailCheckButtonFlag(true);
                setPasswordSendFlag(true);
            } else {
                setLoading(false);
            }
        } catch (e: any) {
            //alert(e.message);
            setforgotPwReason('Invalid email address');
            setEmailCheckFlag(false);
            setLoading(false);
            setEmailCheckButtonFlag(true);
            setPasswordSendFlag(false);
        }
    };

    const CheckEmail = (str: string) => {
        var reg_email =
            /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
        if (!reg_email.test(str)) {
            return false;
        } else {
            return true;
        }
    };

    // General Login ////////////////////////////////////////////////////////////////////////////////////
    const handleLoginSubmit = useCallback(
        (event: React.FormEvent<HTMLFormElement>) => {
            setLoading(true);
            event.preventDefault();
            const email = event.currentTarget.email.value;
            const password = event.currentTarget.password.value;

            if (email == '') {
                alert('Please enter your email.');
                setLoading(false);
                return;
            }
            if (password == '') {
                alert('Please enter your password.');
                setLoading(false);
                return;
            }

            // firebase 로그인 진행
            signInWithEmailAndPassword(auth, email, password)
                .then(async (data) => {
                    // firebase 일반 로그인 시도
                    const accessToken = await data.user.getIdToken();
                    localStorage.setItem('accessToken', accessToken);
                    if (data.user.email != null)
                        localStorage.setItem('email', await data.user.email);

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
                    setLoading(false);
                    console.log(err);
                });
        },
        []
    );

    const [userData, setUserData] = useState(null);
    function handleGoogleLogin() {
        setLoading(true);
        const provider = new GoogleAuthProvider(); // provider를 구글로 설정
        signInWithPopup(auth, provider) // popup을 이용한 signup
            .then(async (data) => {
                const accessToken = await data.user.getIdToken();
                localStorage.setItem('accessToken', accessToken);

                var email = await data.user.email;

                // student check
                const validateEmailCheck = validateEmail(email);

                if (await validateEmailCheck) {
                    // 회원가입 진행
                    if (email != null) localStorage.setItem('email', email);
                    if (data.user.displayName != null)
                        localStorage.setItem(
                            'displayName',
                            await data.user.displayName
                        );
                    if (data.user.displayName != null)
                        localStorage.setItem('uid', await data.user.uid);
                    // 로그인 API 연동
                    authLogin();
                } // 매칭되는 학생 없음
                else {
                    setLoading(false);
                    setOpenStudentCheck(true);
                }
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }

    // 일반 firebase 로그인
    const generalLogin = async () => {
        const response = await axiosClient('/auth/login');
        if (response.data.status_code == 500) {
            // Expired toekn
            alert(response.data.message);
            setLoading(false);
        } else if (response.data.status_code == 400) {
            // Account Does Not Exist!!
            alert(response.data.message);
            setLoading(false);
        } else {
            // 정상 로그인
            var email_param = {
                email: response.data.email,
            };

            SaveRememberId(response.data.email);

            loginInfoHandlerState(email_param);

            // 학생 코스 정보 가져오기
            var param = {
                parent_email: response.data.email,
            };
            const student_course_list = await axiosClient.post(
                `/navigation/student-course-list`,
                param
            );

            if (student_course_list.data.length == 0) {
                alert('No students.');
                location.href = '/';
                setLoading(false);
            } else {
                studentMapHandlerState(student_course_list.data);
                router.push({ pathname: '/overview' });
            }

            setLoading(false);
        }
    };

    const authLogin = async () => {
        const response = await axiosClient('/auth/login');
        if (response.data.status_code == 500) {
            // Expired toekn
            console.log(response.data.message);
            alert(response.data.message);
            setLoading(false);
        } else if (response.data.status_code == 400) {
            
            // Account Already Exists!!
            // or
            // Account Does Not Exist!!

            console.log(response.data.message);

            const authEmail = await response.data.email;

            authSignup();
            
        } else {
            // 정상 로그인
            var email_param = {
                email: response.data.email,
            };

            loginInfoHandlerState(email_param);

            setLoading(false);

            // student-course-list 정보 가져오기
            var param = {
                parent_email: response.data.email,
            };
            const student_course_list = await axiosClient.post(
                `/navigation/student-course-list`,
                param
            );

            if (student_course_list.data.length == 0) {
                alert('No students.');
                location.href = '/';
                setLoading(false);
            } else {
                studentMapHandlerState(student_course_list.data);
                router.push({ pathname: '/overview' });
                setLoading(false);
            }
            return;
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

        const response = await axiosClient.post('/auth/signup', params);
        const authEmail = await response.data.email;
        if (localStorage.getItem('email') == authEmail) {
            // 회원 가입 성공
            localStorage.setItem('role', await response.data.role);


            // 학생 코스 정보 가져오기
            var param = {
                parent_email: response.data.email,
            };
            const student_course_list = await axiosClient.post(
                `/navigation/student-course-list`,
                param
            );

            if (student_course_list.data.length == 0) {
                alert('No students.');
                location.href = '/';
                setLoading(false);
            } else {
                studentMapHandlerState(student_course_list.data);
                router.push({ pathname: '/overview' });
                setLoading(false);
            }
        } else {
            setLoading(false);
        }
    };

    const SetRememberId = () => {
        if (!rememberId) {
            setRemember(true);
            checkId = true;
        } else {
            setRemember(false);
            checkId = false;

            removeCookie('remRogId');
        }
    };

    const SaveRememberId = async (loginId: string) => {
        const expires = new Date();

        // 년도 설정, 현재의 년도를 가져와 +10을 함
        expires.setFullYear(expires.getFullYear() + 1);
        if (checkId) {
            setCookie('remRogId', loginId, {
                path: '/',
                secure: false,
                expires,
            });
        }
    };

    return (
        <Grid item xs={12} sm={12} md={6} xl={6} height={'100%'}>
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
                    sx={{ mb: 4, fontSize: 25 }}
                >
                    Impacter Pathway<br></br>Parent Dashboard
                </Typography>

                <Grid
                    item
                    flexDirection={'column'}
                    alignItems={'center'}
                    display={'flex'}
                    sx={{ mb: 4 }}
                >
                    <Link
                        href='#'
                        onClick={handleGoogleLogin}
                        css={sx.googleButton}
                    >
                        <Stack
                            sx={{
                                // bgcolor: 'secondary.main',
                                bgcolor: 'transparent',
                                width: '220px',
                                height: '52px',
                                display: 'inline-block',
                                padding: '2px',
                                backgroundColor: '#3a88f4',
                                borderRadius: '3px',
                                boxShadow:
                                    '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);',
                            }}
                        >
                            <Stack
                                sx={{
                                    // bgcolor: 'secondary.main',
                                    bgcolor: 'transparent',
                                    width: '48px',
                                    height: '48px',
                                    border: '1px solid #d3d3d3',
                                    display: 'inline-block',
                                    backgroundColor: '#fff',
                                    borderRadius: '3px',
                                }}
                            >
                                <Stack
                                    sx={{
                                        mt: 1.5,
                                        ml: 1.4,
                                    }}
                                >
                                    <Image
                                        src={GoogleLogo}
                                        alt='googleIcon'
                                        width={23}
                                        height={23}
                                    />
                                </Stack>
                            </Stack>
                            <Stack
                                sx={{
                                    position: 'relative',
                                    top: '-5px',
                                    display: 'inline-block',
                                    color: 'white',
                                    fontSize: '15px',
                                    fontWeight: 540,
                                    ml: '17px',
                                }}
                            >
                                Sign in with Google
                            </Stack>
                        </Stack>
                    </Link>
                </Grid>
                <Dialog
                    fullScreen={fullScreen}
                    open={openStudentCheck}
                    onClose={handleStudentCheckClose}
                    aria-labelledby='responsive-dialog-title'
                >
                    <DialogTitle
                        id='responsive-dialog-title'
                        sx={{
                            width: '730px',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            mt: 1,
                        }}
                    >
                        {
                            'Unfortunately, that email is not listed in our Student/Parent Database.'
                        }
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText
                            sx={{
                                whiteSpace: 'pre-wrap',
                                textAlign: 'center',
                                mt: 3,
                            }}
                        >
                            Please try again with an email you used when
                            registering for Impacter Pathway.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleStudentCheckClose} autoFocus>
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
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
                        label={<span css={sx.inputboxLabel}>Email</span>}
                        name='email'
                        autoComplete='email'
                        defaultValue={remRogIds}
                        disabled={loading}
                        autoFocus
                        focused
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
                        disabled={loading}
                        focused
                    />
                    {
                        <FormControlLabel
                            control={
                                <Checkbox
                                    id='rememberCheck'
                                    value='remember'
                                    color='primary'
                                    checked={checkId}
                                    onChange={SetRememberId}
                                />
                            }
                            label={
                                <Typography css={sx.rememberLabel}>
                                    Remember me
                                </Typography>
                            }
                        />
                    }
                    <Link
                        href='#'
                        css={sx.forgotButton}
                        onClick={handleClickOpen}
                        style={{ marginLeft: '85px' }}
                    >
                        Forgot password?
                    </Link>
                    <Dialog
                        fullScreen={fullScreen}
                        open={open}
                        onClose={handleClose}
                        aria-labelledby='responsive-dialog-title'
                    >
                        <DialogTitle
                            id='responsive-dialog-title'
                            sx={{ width: '500px', fontWeight: 'bold' }}
                        >
                            {'Forgot password?'}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText
                                sx={{
                                    whiteSpace: 'pre-wrap',
                                    textAlign: 'center',
                                    mb: 2,
                                }}
                            >
                                {passwordMent}
                            </DialogContentText>
                            {passwordSendFlag ? (
                                <></>
                            ) : emailCheckFlag ? (
                                <TextField
                                    required
                                    fullWidth
                                    id='emailCheck'
                                    label={<span css={sx.inputbox}>Email</span>}
                                    name='emailCheck'
                                    autoComplete='emailCheck'
                                    autoFocus
                                    focused
                                    onChange={onChangeEmailCheck}
                                    disabled={loading}
                                    {...(emailCheckFlag
                                        ? { color: 'success' }
                                        : {})}
                                    color='success'
                                    sx={{ marginTop: '5px' }}
                                />
                            ) : (
                                <TextField
                                    required
                                    error
                                    fullWidth
                                    id='emailCheck-error'
                                    label={<span css={sx.inputbox}>Email</span>}
                                    helperText={forgotPwReason}
                                    autoFocus
                                    onChange={onChangeEmailCheck}
                                    disabled={loading}
                                    sx={{ marginTop: '5px' }}
                                />
                            )}
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} autoFocus>
                                Close
                            </Button>
                            <Button
                                onClick={handleAgree}
                                autoFocus
                                disabled={emailCheckButtonFlag}
                            >
                                Agree
                            </Button>
                        </DialogActions>
                    </Dialog>
                    <Button
                        type='submit'
                        fullWidth
                        variant='contained'
                        disabled={loading}
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
                    {loading && (
                        <CircularProgress
                            size={40}
                            sx={{
                                color: 'red',
                                position: 'absolute',
                                top: '62%',
                                right: '24%',
                            }}
                        />
                    )}
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
                    <span css={sx.SignupBf}>First time logging in?</span>
                    <br></br>
                    &nbsp;&nbsp;
                    <span css={sx.SignupAf}>
                        Click HERE to associate your email with your student’s
                        account.
                    </span>
                </Link>
            </Box>
        </Grid>
    );
};

const sx = {
    rememberLabel: css`
        font-weight: bold;
        font-size: 14px;
        line-height: 24px;
        /* identical to box height, or 171% */
        color: #4f5b70;
    `,
    forgotButton: css`
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        color: #6787b7;
        text-decoration-line: none;
        text-transform: none;
        text-align: center;
    `,
    inputboxLabel: css`
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #4f5b70;
        cursor: default;
    `,
    inputbox: css`
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #4f5b70;
    `,
    SignupBf: css`
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: #4f5b70;
        text-align: center;
    `,
    SignupAf: css`
        font-size: 14px;
        line-height: 22px;
        text-align: center;
    `,
    googleButton: css`
        font-size: 14px;
        line-height: 24px;
        color: #fff;
        text-decoration-line: none;
        text-transform: none;
    `,
};

const Copyright = () => {
    return (
        <Typography variant='body2' color='text.secondary' align='center'>
            {'Copyright © '}
            <Link color='inherit' href='https://www.impacterpathway.com/'>
                ##########
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
};
