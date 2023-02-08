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
            <DialogTitle>Notifications</DialogTitle>
            <DialogContent>
                <DialogContentText>sample</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>View All</Button>
            </DialogActions>
        </Dialog>
    );
}
