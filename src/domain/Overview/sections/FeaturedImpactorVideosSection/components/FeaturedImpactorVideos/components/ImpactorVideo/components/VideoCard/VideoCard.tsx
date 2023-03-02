import { css } from '@emotion/react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { VideoCardItemType } from './types/VideoCard.type';

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

    if (description.length > 45)
        descriptionSummary = description.substr(0, 45) + ' ...';
    else descriptionSummary = description;

    return (
        <Card sx={{ maxWidth: 409.69, height: 424, borderRadius: 5 }}>
            <CardActionArea onClick={() => window.open(videoUrl, '_blank')}>
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

                    <FavoriteIcon
                        fontSize='large'
                        style={{
                            float: 'right',
                            marginTop: '-30px',
                            marginRight: '-5px',
                            color: 'red',
                        }}
                    />
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
        line-height: 20px;
        margin-bottom: 5px;
        margin-top: 3px;

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
};
