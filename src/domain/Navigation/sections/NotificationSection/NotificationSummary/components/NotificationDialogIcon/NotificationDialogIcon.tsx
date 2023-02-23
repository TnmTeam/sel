import * as React from 'react';
import { css } from '@emotion/react';
import {
    Stack,
    IconButton,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
} from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import CloseIcon from '@mui/icons-material/Close';
import { NotificationDialogContent } from './NotificationDialogContent';

export const NotificationDialogIcon = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value: string) => {
        setOpen(false);
    };

    return (
        <Stack>
            <IconButton
                size='large'
                edge='start'
                color='inherit'
                aria-label='menu'
                sx={{ mr: 2 }}
                onClick={handleClickOpen}
            >
                <ChatIcon />
            </IconButton>
            <NotificationDialog open={open} onClose={handleClose} />
        </Stack>
    );
};

const sx = {
    sample: css`
        height: 452px;
        position: relative;
        overflow: hidden;
    `,
    notificationsContainer: css`
        width: 450px;
        height: 580px;
    `
};

export interface NotificationDialogProps {
    open: boolean;
    onClose: (value: string) => void;
}

function NotificationDialog(props: NotificationDialogProps) {
    const { onClose, open } = props;

    const handleClose = () => {
        onClose('');
    };

    return (
        <Dialog
            onClose={handleClose}
            open={open}
            fullWidth={true}
            maxWidth={'xs'}
            scroll='paper'
        >
            <Stack css={sx.notificationsContainer}>
                <DialogActions>
                    <Button onClick={handleClose}>
                    <CloseIcon></CloseIcon></Button>
                </DialogActions>
                <DialogTitle sx={{
                    mt: "-55px",
                    fontSize: "18pt",
                    }}>Notifications</DialogTitle>
                <DialogContent>
                    <DialogContentText ml = {-2}>
                        <NotificationDialogContent/>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button sx={{
                        mt : "-20px",
                        color: "#147AD6",
                        textTransform: "initial", 
                        fontSize: "14pt",
                        marginRight: "250pt"
                    }}  href="/account">View All</Button>
                </DialogActions>
            </Stack>
        </Dialog>
    );
}
