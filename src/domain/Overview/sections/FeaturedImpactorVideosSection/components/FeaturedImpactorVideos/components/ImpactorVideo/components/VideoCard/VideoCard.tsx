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

export const VideoCard = ({ item, index }: VideoCardItemType) => {
    const videoId = item.snippet.resourceId.videoId;
    const videoUrl = 'https://www.youtube.com/watch?v=' + videoId;
    const title = item.snippet.title;
    const publishedAt = item.snippet.publishedAt.split('T');
    const description = item.snippet.description;
    const thumbnails = item.snippet.thumbnails.high.url;

    var titleSummary = '';
    var descriptionSummary = '';

    if (title.length > 23) titleSummary = title.substr(0, 23) + ' ...';
    else titleSummary = title;

    if (description.length > 160)
        descriptionSummary = description.substr(0, 160) + ' ...';
    else descriptionSummary = description;

    return (
        <Card sx={{ maxWidth: 409.69, height: 450, borderRadius: 5 }}>
            <CardActionArea onClick={() => window.open(videoUrl, '_blank')}>
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
                    />
                    */}
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

const sx = {
    date: css`
        font-family : 'DM Sans'
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 15px;
        margin-bottom: 5px;
        margin-top: 0px;

    `,
    title: css`
        font-family : 'DM Sans'
        font-style: normal;
        font-weight: bolad;
        font-size: 22px;
        line-height: 28px;
        margin-bottom: 5px;
    `,
    desc: css`
        font-family : 'DM Sans'
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
};

const CourseProgressImage = () => (
    <Stack>
        <Image objectFit='cover' src={UbeButtonImage} css={sx.imageUbeButton} alt={'img'} />
    </Stack>
);
