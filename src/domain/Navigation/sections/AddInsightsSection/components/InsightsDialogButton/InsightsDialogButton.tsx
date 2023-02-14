import * as React from 'react';
import { css } from '@emotion/react';
import { WhiteButtons, FlexBlueButtons } from '@/common/themes/Color';
import {
    Stack,
    Typography,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
} from '@mui/material';

export const InsightsDialogButton = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value: string) => {
        setOpen(false);
    };

    return (
        <Stack>
            <Button
                sx={{
                    fontSize: '15pt',
                    backgroundColor: WhiteButtons.ButtonColor,
                    color: WhiteButtons.TextColor,
                    marginRight: '40px',
                    ':hover': {
                        backgroundColor: WhiteButtons.onHoverButtonColor,
                        color: WhiteButtons.OnHoverTextColor,
                        border: '0',
                    },
                    border: '0',
                }}
                variant='outlined'
                onClick={handleClickOpen}
            >
                Add Insights
            </Button>
            <InsightsDialog open={open} onClose={handleClose} />
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

export interface InsightsDialogProps {
    open: boolean;
    onClose: (value: string) => void;
}

function InsightsDialog(props: InsightsDialogProps) {
    const { onClose, open } = props;

    const handleClose = () => {
        onClose('');
    };

    return (
        <Dialog
            onClose={handleClose}
            open={open}
            fullWidth={true}
            maxWidth={'lg'}
            scroll='paper'
        >
            <DialogTitle>Add Insights</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    <Typography>Student Reflection</Typography>
                    <Typography>
                        In learning about themselves, your students are
                        practicing self-reflection. It is also important that
                        you as a parent reflect on your child’s practices in
                        these areas. At the end of every lesson, we ask that you
                        complete this reflection as an opportunity to think
                        about your student’s strengths and areas for growth.
                    </Typography>
                    <Typography>
                        ● Read each statement and think of related specific
                        situations, then rate him/her/them on the statement.
                    </Typography>
                    <Typography>
                        ● When you finish, search for patterns of strengths and
                        challenges. This information is for your student, so
                        answer accurately without judging responses as “good” or
                        “not as good.”
                    </Typography>
                    <Typography>
                        In the past week, how often has your student...
                    </Typography>
                    <Typography>
                        1. held themselves to high standards and met them?
                    </Typography>
                    <Typography>
                        ● Read each statement and think of related specific
                        situations, then rate him/her/them on the statement.
                    </Typography>
                    <Typography>
                        ● When you finish, search for patterns of strengths and
                        challenges. This information is for your student, so
                        answer accurately without judging responses as “good” or
                        “not as good.”
                    </Typography>
                    <Typography>
                        In the past week, how often has your student...
                    </Typography>
                    <Typography>
                        1. held themselves to high standards and met them?
                    </Typography>
                    <Typography>
                        ● Read each statement and think of related specific
                        situations, then rate him/her/them on the statement.
                    </Typography>
                    <Typography>
                        ● When you finish, search for patterns of strengths and
                        challenges. This information is for your student, so
                        answer accurately without judging responses as “good” or
                        “not as good.”
                    </Typography>
                    <Typography>
                        In the past week, how often has your student...
                    </Typography>
                    <Typography>
                        1. held themselves to high standards and met them?
                    </Typography>
                    <Typography>
                        ● Read each statement and think of related specific
                        situations, then rate him/her/them on the statement.
                    </Typography>
                    <Typography>
                        ● When you finish, search for patterns of strengths and
                        challenges. This information is for your student, so
                        answer accurately without judging responses as “good” or
                        “not as good.”
                    </Typography>
                    <Typography>
                        In the past week, how often has your student...
                    </Typography>
                    <Typography>
                        1. held themselves to high standards and met them?
                    </Typography>
                    <Typography>
                        ● Read each statement and think of related specific
                        situations, then rate him/her/them on the statement.
                    </Typography>
                    <Typography>
                        ● When you finish, search for patterns of strengths and
                        challenges. This information is for your student, so
                        answer accurately without judging responses as “good” or
                        “not as good.”
                    </Typography>
                    <Typography>
                        In the past week, how often has your student...
                    </Typography>
                    <Typography>
                        1. held themselves to high standards and met them?
                    </Typography>
                    <Typography>
                        ● Read each statement and think of related specific
                        situations, then rate him/her/them on the statement.
                    </Typography>
                    <Typography>
                        ● When you finish, search for patterns of strengths and
                        challenges. This information is for your student, so
                        answer accurately without judging responses as “good” or
                        “not as good.”
                    </Typography>
                    <Typography>
                        In the past week, how often has your student...
                    </Typography>
                    <Typography>
                        1. held themselves to high standards and met them?
                    </Typography>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button
                    onClick={handleClose}
                    sx={{
                        background: FlexBlueButtons.ButtonColor,
                        color: FlexBlueButtons.TextColor,
                    }}
                >
                    Submit
                </Button>
            </DialogActions>
        </Dialog>
    );
}
