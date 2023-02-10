import * as React from 'react';
import { css } from '@emotion/react';
import {
    Stack,
    Box,
    Slider,
    Avatar,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    IconButton,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import { FlexBlueButtons } from '@/common/themes/Color';
import { Colors } from '@/common/themes/Color';

import SearchIcon from '@mui/icons-material/Search';
import CachedIcon from '@mui/icons-material/Cached';

import { PhotoUpload } from './components/PhotoUpload/PhotoUpload';

export const PhotoPopup = () => {
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
                <Avatar
                    style={{
                        background: '#fff',
                        border: '0.1px solid #147AD6',
                    }}
                >
                    <EditIcon color='secondary' />
                </Avatar>
            </IconButton>
            <PhotoEditDialog open={open} onClose={handleClose} />
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

export interface PhotoEditDialogProps {
    open: boolean;
    onClose: (value: string) => void;
}

function PhotoEditDialog(props: PhotoEditDialogProps) {
    // Popup
    const { onClose, open } = props;

    const handleClose = () => {
        onClose('');
    };

    // Slide
    const [value, setValue] = React.useState<number>(50);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number);
    };

    return (
        <Dialog
            onClose={handleClose}
            open={open}
            fullWidth={true}
            maxWidth={'sm'}
            scroll='paper'
        >
            <DialogActions>
                <DialogTitle
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        m: 'auto',
                        fontSize: '16pt',
                    }}
                >
                    Edit Photo
                </DialogTitle>
                <Button onClick={handleClose}>
                    <CloseIcon></CloseIcon>
                </Button>
            </DialogActions>
            <DialogContent sx={{ height: '400px' }}>
                <PhotoUpload />
            </DialogContent>
            <Box sx={{ width: 400, m: 'auto' }}>
                <Stack spacing={2} mb={5} direction='row' alignItems='center'>
                    <SearchIcon />
                    Zoom
                    <Slider
                        aria-label='Volume'
                        value={value}
                        onChange={handleChange}
                        color='secondary'
                    />
                    <Button
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            m: 'auto',
                            color: Colors.BackBlue,
                            ':hover': {
                                color: Colors.ActiveBlue,
                            },
                        }}
                        href='#'
                    >
                        Rotate
                    </Button>
                    <CachedIcon />
                </Stack>
            </Box>

            <DialogActions>
                <Button
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        m: 'auto',
                        fontSize: '18pt',
                        backgroundColor: FlexBlueButtons.ButtonColor,
                        color: FlexBlueButtons.TextColor,
                        ':hover': {
                            backgroundColor: FlexBlueButtons.onHoverButtonColor,
                            color: FlexBlueButtons.OnHoverTextColor,
                        },
                    }}
                    href='#'
                >
                    Save Photo
                </Button>
            </DialogActions>
        </Dialog>
    );
}
