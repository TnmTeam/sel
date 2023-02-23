import { css } from '@emotion/react';
import {
    CardContent,
    CardMedia,
    Typography
    } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CircleIcon from '@mui/icons-material/Circle';
import SendIcon from '@mui/icons-material/Send';
import img from '@/assets/overview/img-FeturedStudentWork.png'
import Image from 'next/image';

export const FeturedStudentWork = () => {

    const content = [
        { title: "Roller Skates", date: "11/14/22", img: Image, detail: "My mode of transportation is abcde"}
    ]

    var titleSummary = '';
    var descriptionSummary = '';

    if (content[0].title.length > 18) titleSummary = content[0].title.substr(0, 18) + ' ...';
    else titleSummary = content[0].title;

    if (content[0].detail.length > 29)
        descriptionSummary = content[0].detail.substr(0, 29) + ' ...';
    else descriptionSummary = content[0].detail;

    return (
        <div css={sx.FeturedContainer}>
            <div css={sx.comingSoon}>Coming Soon</div>
            <CircleIcon css = {sx.CircleOut}></CircleIcon>
            <CircleIcon css = {sx.CircleIn}></CircleIcon>
            <SendIcon css = {sx.SendIcon}></SendIcon>
                <CardMedia>
                    <Image src={img} alt="img" width="289" style={{ borderRadius:"28px 28px 0 0" }}/>
                </CardMedia>
                <CardContent>
                    <Typography color='text.secondary' fontSize="15px" mt={0.7}>
                        {content[0].date}
                    </Typography>
                    <Typography variant='h5' fontWeight={'bold'}>
                        {titleSummary}
                    </Typography>
                    <Typography color='text.secondary' fontSize="15px">
                        {descriptionSummary}
                    </Typography>
                    <FavoriteIcon css = {sx.FavoriteIcon}/>
                </CardContent>
        </div>
    );
};

const sx = {
    FeturedContainer: css`
        position: absolute;
        width: 289px;
        height: 427px;
        right: 59px;
        background: #FFFFFF;
        border-radius: 28px;
    `,
    CircleOut: css`
        position: absolute;
        width: 80px;
        height: 80px;
        left: 200.22px;
        top: 265.5px;
        color: #FFF;
    `,
    CircleIn: css`
        position: absolute;
        width: 65px;
        height: 65px;
        left: 207.72px;
        top: 273px;
        color: #6787B7;
    `,
    SendIcon: css`
        position: absolute;
        width: 25px;
        height: 25px;
        left: 230px;
        top: 292px;
        transform: matrix(0.74, -0.67, 0.65, 0.76, 0, 0);
        color: #FFF;
`,
    FavoriteIcon: css`
        width: 20pt;
        height: 20pt;
        position: absolute;
        left: 84.98%;
        right: 6.77%;
        top: 91.04%;
        bottom: 3.94%;
        color: #EA4848;
    `,
    comingSoon: css`
        background: rgba(0, 0, 0, 0.7);
        font-size: 40px;
        color: white;
        position: absolute;
        width: 289px;
        line-height: 427px;
        border-radius: 26px;
        z-index: 999;
        text-align: center;
    `,
}