import { css } from '@emotion/react';
import { Stack } from '@mui/material';
import { ProgressReports, RecentUploads, StudentWorkbook } from './components';
import { ReportStateType } from '../../types/report.type';

type DataType = {
    data: ReportStateType;
};

export const ReportSection = ({ data }: DataType) => {
    return (
        <Stack css={sx.root} direction='row'>
            <div>
                <ProgressReports data={data.progressReportsState} />
                {/*
                // TO DO: Phase 1. demo hide
                <RecentUploads />
                */}
            </div>
            <StudentWorkbook data={data.studentWrokbookState} />
        </Stack>
    );
};

const sx = {
    root: css`
        padding: 35px 65px 86px 65px;
        justify-content: space-between;
    `,
};
