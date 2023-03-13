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
import CircularProgress from '@mui/material/CircularProgress';
import React, { useCallback, useState, useEffect } from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import {
    auth,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
} from '../../firebaseConfig';
import {
    courseArrayState,
    courseMapState,
    studentArrayState,
    studentMapState,
    loginInfo,
    studentCourseArray,
} from '@/common/atom/Atom';

import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';

import { axiosClient } from '@/data/client/client';
import { useSetRecoilState, useRecoilValue, useRecoilState } from 'recoil';
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

    const [findEmail, setFindEmail] = useState('');

    const [buttonHidden, setButtonHidden] = useState<string>('');

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

    // email
    const onChangeEmail = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setFindEmail(e.target.value);
        },
        []
    );

    // reset password
    const triggerResetEmail = async () => {
        setLoading(true);
        if (findEmail != '') {
            await sendPasswordResetEmail(auth, findEmail);
            alert('[ ' + findEmail + ' ] ' + 'Password reset email sent');
            console.log('Password reset email sent');
            setLoading(false);
        } else {
            setOpen(true);

            alert('Please enter your email.');
            setLoading(false);
        }
    };

    const [open, setOpen] = useState(false);
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

    const handleAgree = async () => {
        setLoading(true);
        try {
            if (emailCheckFlag) {
                await sendPasswordResetEmail(auth, findEmailCheck);

                setPasswordMent(
                    '[ ' + findEmailCheck + ' ] ' + 'Password reset email sent'
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
            //console.log(event.currentTarget);
            const email = event.currentTarget.email.value;
            const password = event.currentTarget.password.value;

            if (email != '') {
                setFindEmail(email);
            } else {
                setLoading(false);
                return;
            }

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
                setLoading(false);
            });
    }

    // 일반 firebase 로그인
    const generalLogin = async () => {
        const response = await axiosClient('/auth/login');
        if (response.data.status_code == 500) {
            // Expired toekn
            //console.log(response.data.message);
            alert(response.data.message);
            setLoading(false);
        } else if (response.data.status_code == 400) {
            // Account Does Not Exist!!
            //console.log(response.data.message);
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
                //console.log(student_course_list.data);
                studentMapHandlerState(student_course_list.data);
                router.push({ pathname: '/overview' });
            }

            //router.push({ pathname: '/select' });
            setLoading(false);

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
            setLoading(false);
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

            //router.push({ pathname: '/select' });
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
                //console.log(student_course_list.data );
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
                //console.log(student_course_list.data );
                studentMapHandlerState(student_course_list.data);
                router.push({ pathname: '/overview' });
                setLoading(false);
            }
        } else {
            setLoading(false);
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

    const SetRememberId = () => {
        if (!rememberId) {
            setRemember(true);
            checkId = true;
        } else {
            setRemember(false);
            checkId = false;

            //setCookie('remRogId', 'null', { path: '/', secure:false,});
            removeCookie('remRogId');
        }
    };

    const SaveRememberId = async (loginId: string) => {
        //console.log('SaveRememberId loginId : '+loginId);
        const expires = new Date();

        // 년도 설정, 현재의 년도를 가져와 +10을 함
        expires.setFullYear(expires.getFullYear() + 1);
        //console.log("checkId : "+checkId);
        if (checkId) {
            //localStorage.setItem('loginId', loginId);
            setCookie('remRogId', loginId, {
                path: '/',
                secure: false,
                expires,
            });
        }
    };

    return (
        <Grid
            item
            xs={12}
            sm={12}
            md={12}
            xl={6}
            component={Paper}
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
                    <Link href='#' onClick={handleGoogleLogin} css={sx.googleButton}>
                        {/* <Avatar
                            sx={{
                                mb: 3,
                                // bgcolor: 'secondary.main',
                                bgcolor: 'transparent',
                                width: '100px',
                                height: '50px',
                                border: '1px solid #d3d3d3',
                            }}
                        >
                            <Image
                                src={GoogleLogo}
                                alt='googleIcon'
                                width={30}
                                height={30}
                            />
                        </Avatar> 
                        */}
                        <Stack sx={{
                                // bgcolor: 'secondary.main',
                                bgcolor: 'transparent',
                                width: '220px',
                                height: '52px',
                                display: 'inline-block',
                                padding: '2px',
                                backgroundColor: '#3a88f4',
                                borderRadius: '3px',
                                boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);',
                            }}>
                            <Stack sx={{
                                
                                // bgcolor: 'secondary.main',
                                bgcolor: 'transparent',
                                width: '48px',
                                height: '48px',
                                border: '1px solid #d3d3d3',
                                display: 'inline-block',
                                backgroundColor: '#fff',
                                borderRadius: '3px',
                            }}>
                                <Stack sx={{
                                    mt: 1.5,
                                    ml: 1.4,
                                }}>
                                    <Image
                                        src={GoogleLogo}
                                        alt='googleIcon'
                                        width={23}
                                        height={23}
                                        
                                    />
                                </Stack>
                            </Stack>
                            <Stack sx={{display: 'inline-block', fontSize:'15px', fontWeight:540,ml:'17px',  }}>
                                <Stack sx={{position: 'absolute', top:'328px'  }}>
                                    <span style={{fontFamily: "'Poppins', sans-serif"}}>Sign in with Google</span>
                                </Stack> 
                            </Stack>
                        </Stack>
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
                        label={<span css={sx.inputboxLabel}>Email</span>}
                        name='email'
                        autoComplete='email'
                        onChange={onChangeEmail}
                        defaultValue={remRogIds}
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
                        ) : (
                            emailCheckFlag ? (
                                <TextField
                                    required
                                    fullWidth
                                    id='emailCheck'
                                    label={<span css={sx.inputbox}>Email</span>}
                                    name='emailCheck'
                                    autoComplete='emailCheck'
                                    autoFocus
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
                            )
                        )
                        }
                            
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
                    <span css={sx.SignupBf}>
                        First time logging in?
                    </span>
                    <br></br>
                    &nbsp;&nbsp;
                    <span css={sx.SignupAf}>Click HERE to associate your email with your student’s account.</span>
                </Link>
            </Box>
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
                    Impacter Pathway Parent Dashboard
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
        font-family: 'Poppins', sans-serif;    
        font-size: 14px;
        line-height: 24px;
        color: #fff;
        text-decoration-line: none;
        text-transform: none;
    `
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
