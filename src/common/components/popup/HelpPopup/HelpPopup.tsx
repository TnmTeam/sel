import * as React from 'react';
import { css } from '@emotion/react';
import { HelpView } from './views/HelpView/HelpView';
import { MainView } from './views/MainView/MainView';
import { MessagesView } from './views/MessageView/MessagesView';
import { NewsView } from './views/NewsView/NewsView';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Popper from '@mui/material/Popper';
import Button from '@mui/material/Button';
import ModeCommentIcon from '@mui/icons-material/ModeComment';

export const HelpPopup = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [isClicked, setIsClicked] = React.useState<number>(0);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    const fnReturnView = (index: number) => {
        switch(index) {
            case 0:
                return (<MainView isClicked={isClicked} setIsClicked={setIsClicked} />);
                break;
            case 1:
                return (<MessagesView isClicked={isClicked} setIsClicked={setIsClicked} />);
                break;
            case 2:
                return (<HelpView isClicked={isClicked} setIsClicked={setIsClicked} />);
                break;
            case 3:
                return (<NewsView isClicked={isClicked} setIsClicked={setIsClicked} />);
                break;
            default:
                return (<MainView isClicked={isClicked} setIsClicked={setIsClicked} />);
            }
    }

    return (
        <Stack>
            <Avatar aria-describedby={id} onClick={handleClick} css={sx.popup}>
                <ModeCommentIcon fontSize='large' />
            </Avatar>
            <Popper id={id} open={open} anchorEl={anchorEl} placement='top-end'>
                {() => fnReturnView(isClicked)}
            </Popper>
        </Stack>
    );
};

const sx = {
    popup: css`
        position: fixed;
        bottom: 50px;
        width: 60px;
        height: 60px;
        right: 280px;
        z-index: 99;
        background: #4a7199;
        max-width: 1440px;
        margin: 0 auto;
        border: 1px solid;
    `,
};
