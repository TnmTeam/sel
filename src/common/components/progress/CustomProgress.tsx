import { css } from "@emotion/react";
import { Box, CircularProgress } from "@mui/material";

export const CustomProgress = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress />
    </Box>
  );
};
