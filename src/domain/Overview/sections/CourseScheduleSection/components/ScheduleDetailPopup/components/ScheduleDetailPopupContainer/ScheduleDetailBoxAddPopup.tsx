import { css } from '@emotion/react';
import { Stack } from '@mui/system';

import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Dialog from '@mui/material/Dialog';
import Divider from '@mui/material/Divider';


import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';



export const ScheduleDetailBoxAddPopup = () => {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

  
    return (
        <Stack>

            <Stack css={sx.popupAddBtnText}>
                + Add To Calender
                <Button css={sx.popupAddBtn} onClick={handleClick}> </Button>
            </Stack>

            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left'
                }}
                transformOrigin={{ 
                    vertical: 'bottom',
                    horizontal: 'left'
                }}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                PaperProps={{  
                    style: {  
                        width: 150,
                    },  
                }} 
            >
                
                <MenuItem css={sx.listFontSelect} onClick={handleClose}> 
                    iCal file
                </MenuItem>
                
                <Divider />
                <MenuItem css={sx.listFontDefault} onClick={handleClose}> 
                    Outlook
                </MenuItem>
                
                <Divider />
                <MenuItem css={sx.listFontDefault} onClick={handleClose}> 
                    Google 
                </MenuItem>

            </Menu>
        </Stack>
        
    );
}


const sx = {
    popupAddBtnText: css`
        position: absolute;
        width: 150px;
        height: 24px;
        left: 670px;
        top: 412px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        color: #147AD6;
        /*
        cursor: pointer;
        */

        display: none;
    `,
    popupAddBtn: css`
        position: absolute;
        width: 100%;
        height: 200%;
        top: -15px;
    `,
    listFontSelect: css`
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        color: #147AD6;
    `,
    listFontDefault: css`
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        color: #979797;
    `
}


