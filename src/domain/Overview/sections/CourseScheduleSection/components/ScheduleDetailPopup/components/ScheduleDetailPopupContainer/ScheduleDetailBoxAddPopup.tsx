import * as React from 'react';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';

import Divider from '@mui/material/Divider';


import { css } from '@emotion/react';
import { Stack } from '@mui/system';


export const ScheduleDetailBoxAddPopup = () => {

    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
        setOpen(true);
    };
  
    const handleClose = () => {
        setOpen(false);
    };
  
    return (
        <Stack>
            
            <Stack css={sx.popupAddBtn} onClick={handleClickOpen}>
                + Add To Calender
            </Stack>

                <Dialog 
                    // fullScreen={fullScreen}
                    // maxWidth={false}
                    open={open}
                    onClose={handleClose}
                    css={sx.dialogCss}
                    
                >
                    {/* <DialogTitle>Set backup account</DialogTitle> */}
                    
                    <Stack css={sx.popupAddPopupList}>
                        
                        <List>
                            <ListItemButton autoFocus>
                                <ListItem disableGutters>
                                    <ListItemText primary="iCal file" css={sx.listFontSelect} />
                                </ListItem>
                            </ListItemButton>
                            <Divider />
                            <ListItemButton autoFocus>
                                <ListItem disableGutters>
                                    <ListItemText primary="Outlook" css={sx.listFontSelect} />
                                </ListItem>
                            </ListItemButton>
                            <Divider />
                            <ListItemButton autoFocus>
                                <ListItem disableGutters>
                                    <ListItemText primary="Google" css={sx.listFontSelect} />
                                </ListItem>
                            </ListItemButton>
                        </List>

                    </Stack>
                </Dialog>

        </Stack>
        
    );
}


const sx = {
    popupAddBtn: css`
        position: absolute;
        width: 140px;
        height: 24px;
        left: 670px;
        top: 412px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        color: #147AD6;
        cursor: pointer;
    `,
    popupAddPopupList: css`
        width: 187px;
    `,
    dialogCss: css`
        left: 620px;
        top: 120px;
        backgroundColor: 'transparent';
        boxShadow: 'none';
    `,
    listFontSelect: css`
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        color: #147AD6;
    `,
    listFontDefault: css`
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        color: #147AD6;
    `
}


