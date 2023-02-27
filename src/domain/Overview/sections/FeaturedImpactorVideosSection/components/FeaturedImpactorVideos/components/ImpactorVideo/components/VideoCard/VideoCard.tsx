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

    if (description.length > 38)
        descriptionSummary = description.substr(0, 38) + ' ...';
    else descriptionSummary = description;

    return (
        <Card sx={{ maxWidth: 409.69, height: 424, borderRadius: 5 }}>
            <CardActionArea onClick={() => window.open(videoUrl, '_blank')}>
                <CardMedia component='img' height='308' image={thumbnails} />
                <CardContent>
                    <Typography color='text.secondary'>
                        {publishedAt[0]}
                    </Typography>
                    <Typography variant='h5' fontWeight={'bold'}>
                        {titleSummary}
                    </Typography>
                    <Typography color='text.secondary'>
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
