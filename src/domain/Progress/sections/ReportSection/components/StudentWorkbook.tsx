import { Typography } from "@mui/material";
import { css } from "@emotion/react";
import workbook from "@/assets/progress/report/workbook.png";
import Image from "next/image";
export const StudentWorkbook = () => {
  return (
    <div>
      <Typography css={sx.title}>Student Workbook</Typography>
      <div>
        <Image src={workbook} alt="workbook" width={753} height={973} />
      </div>
    </div>
  );
};

const sx = {
  title: css`
    font-weight: 700;
    font-size: 24px;
    line-height: 31px;
    color: #0a0b26;
    margin-bottom: 31px;
  `,
};
