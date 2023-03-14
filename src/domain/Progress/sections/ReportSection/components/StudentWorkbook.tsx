import { Typography } from '@mui/material';
import { css } from '@emotion/react';
import workbook from '@/assets/progress/report/workbook.png';
import Image from 'next/image';
import { StudentWorkbookType } from '../../../types/report.type';
import { CustomProgress } from '@/common/components/progress';
import { Stack } from '@mui/material';
import { axiosClient } from '@/data/client/client';
import axios from 'axios';
import { useState, useRef, useEffect } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import Fade from '@mui/material/Fade';
import Dialog from '@mui/material/Dialog';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import dynamic from 'next/dynamic';
import { ClosePopupBtn } from '@/domain/Overview/sections/CourseScheduleSection/components/ScheduleDetailPopup/components/ScheduleDetailPopupContainer/ClosePopupBtn';

const ReactGoogleSlides = dynamic(() => import('react-google-slides'), {
    ssr: false,
});

type DataType = {
    data: StudentWorkbookType;
};

export const StudentWorkbook = ({ data }: DataType) => {
    // const tempUrl = 'https://docs.google.com/presentation/d/1F1fOW7D-zVPvEuX0kVNTrobXDQkQQirT13p8iYpKoVU/';
    // const tempEmbed = '/embed?loop=true&start=true&delayms=10000&slide=1';
    // const slidesHtmlOrig = '<iframe src="'+ tempUrl + tempEmbed +'" width="590px" height="600px" ></iframe>'

    const [position, setPosition] = useState(1);
    const [endPage, setEndPage] = useState(1);
    const [prevBtnFlag, setPrevBtnFlag] = useState(false);
    const [nextBtnFlag, setNextBtnFlag] = useState(false);
    const [fullBtnFlag, setFullBtnFlag] = useState(true);

    const prevBtnEvent = () => {
        // goToScroll();
        if (position > 1) {
            setPosition((position) => position - 1);
        }
    };
    const nextBtnEvent = () => {
        // goToScroll();
        if (position < endPage) {
            setPosition((position) => position + 1);
        }
    };

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleValue = (val: number) => {
        setPosition(val);
        handleClose();
    };

    const [workbookId, setWorkbootId] = useState('');

    const getGoogleSlides = async () => {
        if (data.result) {
            const tempUrl = data.result.workbookId;
            const docsUrl =
                tempUrl.substring(0, tempUrl.indexOf('edit?')) + 'embed?';


            try {
                // const response = await axiosClient.get('https://docs.google.com/presentation/d/1L7tJTJHxAdVCJkQ3lpZkShk1SbNJnjOfuLRkIFUFdAE/embed?loop=false&start=true&delayms=10000&slide=1');
                const response = await axios.get(docsUrl);
                const innerHtml = response.data;

                if (innerHtml.includes('slidePageCount')) {
                    const idx = innerHtml.indexOf('slidePageCount');
                    const end = innerHtml.indexOf(',', idx);

                    const getStr = innerHtml.substring(idx, end);

                    const tempArr = getStr.split(':');
                    const totalPage = +tempArr[1].trim();

                    setPosition(1);
                    setEndPage(totalPage);
                    setFullBtnFlag(true);
                }
            } catch (error) {
                setEndPage(1);
                setPosition(1);
                setFullBtnFlag(false);
                // setWorkbootId("");
            }
        } else {
            setEndPage(1);
            setPosition(1);
        }
    };

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const [popupOpen, setPopupOpen] = useState(false);
    const handleClickPopupOpen = () => {
        setPopupOpen(true);
        // setPopupUrl(url);
    };
    const handlePopupClose = () => {
        setPopupOpen(false);
    };

    useEffect(() => {
        if (data.result) {
            if (
                data.result.workbookId != undefined &&
                workbookId != data.result.workbookId
            ) {
                setWorkbootId(data.result.workbookId);
                getGoogleSlides();
            }

            if (data.result.workbookId == undefined) {
                setEndPage(0);
                setPosition(0);
            }
        }
    }, [data.result]);

    useEffect(() => {
        if (endPage <= 1) {
            setPrevBtnFlag(true);
            setNextBtnFlag(true);
        } else {
            if (position == 1) {
                setPrevBtnFlag(true);
                setNextBtnFlag(false);
            } else if (position == endPage) {
                setPrevBtnFlag(false);
                setNextBtnFlag(true);
            } else {
                setPrevBtnFlag(false);
                setNextBtnFlag(false);
            }
        }
    }, [position, endPage]);

    return (
        <Stack css={sx.container}>
            <Typography css={sx.title}>Student Workbook</Typography>

            {!data.result || data.isLoading ? (
                <Stack
                    height={'452px'}
                    justifyContent='center'
                    alignItems={'center'}
                >
                    <CustomProgress />
                </Stack>
            ) : (
                <>
                    {data.result.workbookId == undefined ? (
                        <Stack
                            style={{
                                width: '610px',
                                height: '790px',
                                backgroundColor: '#efefef',
                                fontFamily: 'DM Sans',
                                fontWeight: '400',
                                fontSize: '20px',
                                textAlign: 'center',
                                paddingTop: '50%',
                            }}
                        >
                            No Presentation
                        </Stack>
                    ) : (
                        <>
                            {fullBtnFlag ? (
                                <ReactGoogleSlides
                                    width={610}
                                    height={790}
                                    slidesLink={data.result.workbookId}
                                    position={position}
                                    // slideDuration={10}
                                    // showControls={true}     // Toggles the slideshow controls at the bottom of the screen
                                />
                            ) : (
                                <div
                                    style={{
                                        width: '610px',
                                        height: '790px',
                                        backgroundColor: '#e0e0e0',
                                        textAlign: 'center',
                                        lineHeight: '300px',
                                        fontWeight: 'bold',
                                        fontSize: '20px',
                                        borderRadius: '10px',
                                    }}
                                >
                                    no workbook
                                </div>
                            )}
                        </>
                    )}

                    <div css={sx.navigatorDiv}>
                        <Button
                            variant='contained'
                            color='inherit'
                            onClick={prevBtnEvent}
                            disabled={prevBtnFlag}
                        >
                            {'<'}
                        </Button>

                        <Button
                            id='fade-button'
                            aria-controls={open ? 'fade-menu' : undefined}
                            aria-haspopup='true'
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            style={{ width: '100px' }}
                        >
                            {position} / {endPage}
                        </Button>
                        <Menu
                            id='fade-menu'
                            MenuListProps={{
                                'aria-labelledby': 'fade-button',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            TransitionComponent={Fade}
                            style={{ height: '200px' }}
                        >
                            {
                                // use_for(endPage)

                                (() => {
                                    const result = [];
                                    for (let i = 0; i < endPage; i++) {
                                        const idx = i + 1;
                                        result.push(
                                            <MenuItem
                                                key={i}
                                                onClick={(e) => {
                                                    handleValue(idx);
                                                }}
                                                style={{
                                                    height: '50%',
                                                    fontSize: '13px',
                                                }}
                                            >
                                                {idx} page
                                            </MenuItem>
                                        );
                                    }
                                    return result;
                                })()
                            }
                        </Menu>

                        <Button
                            variant='contained'
                            color='inherit'
                            onClick={nextBtnEvent}
                            disabled={nextBtnFlag}
                        >
                            {'>'}
                        </Button>

                        <div></div>

                        <Button
                            variant='contained'
                            color='inherit'
                            onClick={handleClickPopupOpen}
                            disabled={!fullBtnFlag}
                            style={{ marginLeft: '50px' }}
                        >
                            <FullscreenIcon />
                        </Button>
                    </div>

                    <Dialog
                        fullScreen={fullScreen}
                        maxWidth={false}
                        open={popupOpen}
                        onClose={handlePopupClose}
                    >
                        <ClosePopupBtn closeHandle={handlePopupClose} />
                        <ReactGoogleSlides
                            width={window.innerWidth - 100}
                            height={window.innerHeight}
                            slidesLink={data.result?.workbookId}
                            position={position}
                            showControls={true}
                        />
                    </Dialog>
                </>
            )}
        </Stack>
    );
};

const sx = {
    title: css`
        font-weight: 700;
        font-size: 24px;
        line-height: 31px;
        color: #0a0b26;
        margin-bottom: 31px;
    `,
    container: css`
        width: 625px;
        height: 973px;
    `,
    navigatorDiv: css`
        display: flex;
        width: 590px;
        height: 25px;
        padding-left: 180px;
        margin-top: 20px;
    `,
};
