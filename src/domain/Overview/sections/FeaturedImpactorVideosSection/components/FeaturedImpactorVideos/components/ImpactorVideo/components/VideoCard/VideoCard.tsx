import { css } from '@emotion/react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Stack } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { VideoCardItemType } from './types/VideoCard.type';
import Image from 'next/image';
import UbeButtonImage from '@/assets/overview/img-utubeButton.png';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ClosePopupBtn } from "@/domain/Overview/sections/CourseScheduleSection/components/ScheduleDetailPopup/components/ScheduleDetailPopupContainer/ClosePopupBtn";

export const VideoCard = ({ item, index }: VideoCardItemType) => {
    const videoId = item.snippet.resourceId.videoId;
    // const videoUrl = 'https://www.youtube.com/watch?v=' + videoId;
    const videoUrlEmbed = 'https://www.youtube.com/embed/' + videoId + '?rel=0&modestbranding=1&autoplay=1&mute=1';
    const title = item.snippet.title;
    const publishedAt = item.snippet.publishedAt.split('T');
    const description = item.snippet.description;
    // const thumbnails = item.snippet.thumbnails.medium.url;
    var titleSummary = '';
    var descriptionSummary = '';
    
    if (title.length > 23) titleSummary = title.substr(0, 23) + ' ...';
    else titleSummary = title;
    
    if (description.length > 160)
    descriptionSummary = description.substr(0, 160) + ' ...';
    else descriptionSummary = description;
    
    let thumbnails = "";
    if (item.snippet.thumbnails.maxres)
        thumbnails = item.snippet.thumbnails.maxres.url;
    else if (item.snippet.thumbnails.medium.url)
        thumbnails = item.snippet.thumbnails.medium.url;
    else if (item.snippet.thumbnails.high.url)
        thumbnails = item.snippet.thumbnails.high.url;
    else if (item.snippet.thumbnails.standard.url)
        thumbnails = item.snippet.thumbnails.standard.url;
    else if (item.snippet.thumbnails.default.url)
        thumbnails = item.snippet.thumbnails.default.url;

    
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true); 
      };
    const handleClose = () => {
        setOpen(false);
    };

    
    return (
        <>

        <Card sx={{ maxWidth: 409.69, height: 450, borderRadius: 5 }}>
            <CardActionArea onClick={handleOpen}>
                <CourseProgressImage />
                <CardMedia component='img' height='308' image={thumbnails} />
                <CardContent>
                    <Typography color='text.secondary' css={sx.date}>
                        {publishedAt[0]}
                    </Typography>
                    <Typography variant='h5' fontWeight={'bold'} css={sx.title}>
                        {titleSummary}
                    </Typography>
                    <Typography color='text.secondary' css={sx.desc}>
                        {descriptionSummary}
                    </Typography>

                    {/* ToDo : Phase 1. Hidden
                    <FavoriteIcon
                        fontSize='large'
                        style={{
                            float: 'right',
                            marginTop: '-30px',
                            marginRight: '-5px',
                            color: 'red',
                        }}
                    /> */}

                </CardContent>
            </CardActionArea>
        </Card>


        <Dialog
            fullScreen={fullScreen}
            maxWidth={false}
            open={open}
            onClose={handleClose}
        >
            <ClosePopupBtn closeHandle={handleClose} />
            <DialogContent style={{marginTop:"25px"}}>
                <div css={sx.videoDialogParent}>
                    <iframe src={videoUrlEmbed} allow="fullscreen" css={sx.videoDialogChild}/>
                </div>
            </DialogContent>
        </Dialog>

        </>
    );
};

const sx = {
    date: css`
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 15px;
        margin-bottom: 5px;
        margin-top: 0px;

    `,
    title: css`
        font-style: normal;
        font-weight: bolad;
        font-size: 22px;
        line-height: 28px;
        margin-bottom: 5px;
    `,
    desc: css`
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0.25px;
    `,
    img: css`
        border-top-left-radius: 28px;
        border-top-right-radius: 28px;
    `,
    imageUbeButton: css`
      position: absolute;
      width: 25%;
      height: 25%;      
      margin-top: 25%;
      margin-left: 35%;
      border-top-left-radius: 28px;
      border-top-right-radius: 28px;
      z-index: 999;
      opacity:0.7;
    `,
    videoDialogParent: css`
        position: relative; 
        padding-bottom: 56.25%;
        width: 900px;
        height: 0;
    `,
    videoDialogChild: css`
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    `,
};

const CourseProgressImage = () => (
    <Stack>
        <Image objectFit='cover' src={UbeButtonImage} css={sx.imageUbeButton} alt={'img'} />
    </Stack>
);
