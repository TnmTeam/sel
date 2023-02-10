import { css } from '@emotion/react';
import { Stack } from '@mui/system';
import { Box } from '@mui/system';

export const SelfSplineChartScore = () => {
    return (
        <Stack css={sx.mainContainer}>
            <Box css={sx.itemContainer} flexDirection={'row'}>
                <Box css={sx.itemWrapper}>Spline</Box>
            </Box>
        </Stack>
    );
};

const sx = {
    mainContainer: css`
        position: relative;
        height: 632px;
        padding-left: 59px;
        padding-right: 59px;
        background-color: #4a7199;
        margin-top: 40px;
    `,
    itemContainer: css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: center;
    `,
    itemWrapper: css`
        width: 1340px;
        line-height: 632px;
        display: flex;
        background-color: #ffffff;
        border-radius: 10px;
        flex-direction: column;
        font-size: 50pt;
    `,
};
