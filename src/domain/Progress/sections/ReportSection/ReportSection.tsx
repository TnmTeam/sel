import { css } from "@emotion/react";
import { Stack } from "@mui/material";
import { ProgressReports, RecentUploads, StudentWorkbook } from "./components";
import { RepoertStateType } from "../../types/report.type";

type DataType = {
  data: RepoertStateType;
};

export const ReportSection = ({ data }: DataType) => {

  console.log("ReportSection.tsx");
  console.log(data);

  return (
    <Stack css={sx.root} direction="row">
      <div>
        <ProgressReports data={data.progressReportsState} />
        <RecentUploads />
      </div>
      <StudentWorkbook data={data.studentWrokbookState}/>
    </Stack>
  );
};

const sx = {
  root: css`
    padding: 35px 65px 86px 65px;
    justify-content: space-between;
  `,
};
