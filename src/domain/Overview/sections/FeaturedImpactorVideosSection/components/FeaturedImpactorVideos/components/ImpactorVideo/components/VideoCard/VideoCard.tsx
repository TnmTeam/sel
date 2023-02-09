import { css } from '@emotion/react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

export const VideoCard = (item: any, index: number) => {
    const itemMap = JSON.parse(JSON.stringify(item));
    const videoId = itemMap.item.snippet.resourceId.videoId;
    console.log(videoId);
    const videoUrl = 'https://www.youtube.com/watch?v=' + videoId;
    console.log(videoUrl);

    const title = itemMap.item.snippet.title;
    console.log(title);

    const publishedAt = itemMap.item.snippet.publishedAt;
    console.log(publishedAt);

    const description = itemMap.item.snippet.description;
    console.log(description);

    const thumbnails: string = itemMap.item.snippet.thumbnails.standard.url;
    console.log(thumbnails);

    return (
        <Card sx={{ maxWidth: 345, height: 330, borderRadius: 5 }}>
            <CardActionArea href='#'>
                <CardMedia
                    component='img'
                    height='230'
                    image='https://img.youtube.com/vi/6plRta91tDk/mqdefault.jpg'
                />
                <CardContent>
                    <Typography
                        variant='body2'
                        color='text.secondary'
                        fontSize='10pt'
                    >
                        23/02/07
                    </Typography>
                    <Typography gutterBottom variant='h6' marginTop='-5px'>
                        Want to upgrade to the...
                    </Typography>
                    <Typography
                        variant='body2'
                        color='text.secondary'
                        marginTop='-10px'
                    >
                        Details here...
                    </Typography>
                    <FavoriteIcon
                        style={{
                            float: 'right',
                            marginTop: '-30px',
                            color: 'red',
                        }}
                    />
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export const VideoCard2 = () => {
    return (
        <Card sx={{ maxWidth: 345, height: 330, borderRadius: 5 }}>
            <CardActionArea href='https://www.youtube.com/watch?v=G0H3ThQ1uP0'>
                <CardMedia
                    component='img'
                    height='230'
                    image='https://img.youtube.com/vi/G0H3ThQ1uP0/mqdefault.jpg'
                />
                <CardContent>
                    <Typography
                        variant='body2'
                        color='text.secondary'
                        fontSize='10pt'
                    >
                        23/02/07
                    </Typography>
                    <Typography gutterBottom variant='h6' marginTop='-5px'>
                        🔥 Switch to LearnWorlds...
                    </Typography>
                    <Typography
                        variant='body2'
                        color='text.secondary'
                        marginTop='-10px'
                    >
                        Details here...
                    </Typography>
                    <FavoriteIcon
                        style={{
                            float: 'right',
                            marginTop: '-30px',
                            color: 'red',
                        }}
                    />
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export const VideoCard3 = () => {
    return (
        <Card sx={{ maxWidth: 345, height: 330, borderRadius: 5 }}>
            <CardActionArea href='https://www.youtube.com/watch?v=u2fFjrRd7G8'>
                <CardMedia
                    component='img'
                    height='230'
                    image='https://img.youtube.com/vi/u2fFjrRd7G8/mqdefault.jpg'
                />
                <CardContent>
                    <Typography
                        variant='body2'
                        color='text.secondary'
                        fontSize='10pt'
                    >
                        23/02/07
                    </Typography>
                    <Typography gutterBottom variant='h6' marginTop='-5px'>
                        The ultimate formula for...
                    </Typography>
                    <Typography
                        variant='body2'
                        color='text.secondary'
                        marginTop='-10px'
                    >
                        Details here...
                    </Typography>
                    <FavoriteIcon
                        style={{
                            float: 'right',
                            marginTop: '-30px',
                            color: 'red',
                        }}
                    />
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

const sx = {
    ImpactorVideo: css`
        height: 452px;
        position: relative;
    `,
};
