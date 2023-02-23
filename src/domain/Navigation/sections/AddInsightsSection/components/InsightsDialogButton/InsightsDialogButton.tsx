import * as React from "react";
import { css } from "@emotion/react";
import { WhiteButtons, FlexBlueButtons, Colors } from "@/common/themes/Color";
import {
  Stack,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { QuestionBox } from "./QuestionBox";

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
          fontSize: "18pt",
          backgroundColor: WhiteButtons.ButtonColor,
          color: WhiteButtons.TextColor,
          marginRight: "40px",
          ":hover": {
            backgroundColor: WhiteButtons.onHoverButtonColor,
            color: WhiteButtons.OnHoverTextColor,
            border: "0",
          },
          border: "0",
        }}
        variant="outlined"
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
    onClose("");
  };

  const models = [
    {
      question: "1. held themselves to high standards and met them?",
      answers: ["Never", "Once", "Twice", "Three to Five times", "Everydaty"],
    },
    {
      question: "2. held themselves to high standards and met them?",
      answers: ["Never", "Once", "Twice", "Three to Five times", "Everydaty"],
    },
    {
      question: "3. held themselves to high standards and met them?",
      answers: ["Never", "Once", "Twice", "Three to Five times", "Everydaty"],
    },
    {
      question: "4. held themselves to high standards and met them?",
      answers: ["Never", "Once", "Twice", "Three to Five times", "Everydaty"],
    },
    {
      question: "5. held themselves to high standards and met them?",
      answers: ["Never", "Once", "Twice", "Three to Five times", "Everydaty"],
    },
  ];

  const sx = {
    container: css`
      width: 100%;
      flex: 1;
      overflow-y: scroll;
      ::-webkit-scrollbar {
        display: none;
      }
    `,

    dialog: css`
      & .MuiPaper-root {
        min-height: 692px;
        max-height: 692px;
        height: 692px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
    `,    
    comingSoon: css`
        background: rgba(0, 0, 0, 0.7);
        font-size: 100px;
        color: white;
        position: absolute;
        width: 1180px;
        line-height: 800px;
        text-align: center;
        border-radius: 5px;
        z-index: 999;
    `,
  };

  return (
    
    <Dialog
      onClose={handleClose}
      open={open}
      fullWidth={true}
      maxWidth={"lg"}
      scroll="paper"
      css={sx.dialog}
    >
      <div css={sx.comingSoon}>Coming Soon</div>
      <DialogTitle
        sx={{
          width: "100%",
          height: "73px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="subtitle1" fontWeight={700} color={Colors.Gray900}>
          {"Add Insights"}
        </Typography>
        <IconButton onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <div css={sx.container}>
        <DialogContent sx={{ paddingTop: "0px" }}>
          <DialogContentText>
            <Stack className="title" spacing="20px" marginBottom={"28px"}>
              <Typography
                variant="subtitle1"
                lineHeight="40px"
                fontWeight={700}
                color={Colors.Gray900}
              >
                Student Reflection
              </Typography>
              <Typography
                variant="body2"
                lineHeight="20px"
                color={Colors.Gray600}
              >
                In learning about themselves, your students are practicing
                self-reflection. It is also important that you as a parent
                reflect on your child’s practices in these areas. At the end of
                every lesson, we ask that you complete this reflection as an
                opportunity to think about your student’s strengths and areas
                for growth.
              </Typography>
              <Stack spacing="12px">
                <Typography
                  variant="body2"
                  lineHeight="20px"
                  color={Colors.Gray600}
                >
                  ● Read each statement and think of related specific
                  situations, then rate him/her/them on the statement.
                </Typography>
                <Typography
                  variant="body2"
                  lineHeight="20px"
                  color={Colors.Gray600}
                >
                  ● When you finish, search for patterns of strengths and
                  challenges. This information is for your student, so answer
                  accurately without judging responses as “good” or “not as
                  good.”
                </Typography>
              </Stack>
              <Typography
                variant="subtitle1"
                lineHeight="40px"
                fontWeight={700}
                color={Colors.Gray800}
              >
                In the past week, how often has your student...
              </Typography>
            </Stack>
            <Stack className="questions" spacing="40px">
              {models.map((it, index) => (
                <QuestionBox
                  key={index}
                  question={it.question}
                  answers={it.answers}
                />
              ))}
            </Stack>
          </DialogContentText>
        </DialogContent>
      </div>
      <DialogActions
        sx={{
          width: "100%",
          height: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "12px",
        }}
      >
        <Button
          variant="outlined"
          sx={{
            width: "195.5px",
            height: "44px",
            borderColor: "#D0D5DD",
            boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
            textTransform: "none",
            "&.MuiButtonBase-root:hover": {
              bgcolor: "transparent",
              borderColor: "#D0D5DD",
            },
          }}
          onClick={handleClose}
        >
          Cancel
        </Button>
        <Button
          onClick={handleClose}
          sx={{
            width: "195.5px",
            height: "44px",
            backgroundColor: FlexBlueButtons.ButtonColor,
            color: FlexBlueButtons.TextColor,
            textTransform: "none",
            "&.MuiButtonBase-root:hover": {
              bgcolor: FlexBlueButtons.ButtonColor,
            },
          }}
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}
