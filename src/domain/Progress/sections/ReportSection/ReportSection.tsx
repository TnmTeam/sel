import { css } from "@emotion/react";
import { Box, Stack } from "@mui/material";
import { ProgressReports, RecentUploads, StudentWorkbook } from "./components";

export const ReportSection = () => {
  return (
    <Stack css={sx.root} direction="row">
      <div>
        <ProgressReports />
        <RecentUploads />
      </div>
      <StudentWorkbook />
    </Stack>
  );
};

const sx = {
  root: css`
    padding: 35px 65px 86px 65px;
    justify-content: space-between;
  `,
};
