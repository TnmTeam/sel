import { css } from "@emotion/react";
import { Stack, Typography, Button } from "@mui/material";

type SelfAwarenessTitleType = {
  caption: string;
  title: string;
  desc: string;
};

export const SelfAwarenessTitle = ({
  title,
  desc,
  caption,
}: SelfAwarenessTitleType) => (
  <Stack css={sx.stack}>
    <Typography
      variant="h2"
      fontSize="60px"
      lineHeight="68px"
      mb={"123px"}>
      {title}
    </Typography>
    <Typography
      variant="subtitle1"
      fontSize="16px"
      lineHeight="20.83px"
      mb={"10px"}
    >
      {caption}
    </Typography>
    <Typography
      variant="h3"
      fontSize="30px"
      lineHeight="39.06px"
      mb={"21px"}
    >
      {desc}
    </Typography>
    <Button sx={{
      width: "176px",
      height: "53px",
      background: "#6394C7",
      borderRadius: "6px",
      fontSize: "16px",
      color: "white",
      border: 0,
      ':hover': {backgroundColor: "#6394C7"},
    }} onClick={() =>
      window.open(
        'https://www.youtube.com/watch?v=9-3M2QRshPA',
      )}
    >Watch Video</Button>
  </Stack>
);

const sx = {
  stack: css`
  width: 510px;
  position: absolute;
  top: 79px;
  left: 99px;
  font-weight: 700;
  color: #FFFFFF;
  letter-spacing: 0.3px;
`,
  button: css`
    position: absolute;
    left: 0px;
    right: 0px;
    top: 0%;
    bottom: 0%;

    background: #6394C7;
    border-radius: 6px;`
};
