import { css } from '@emotion/react';
import { Stack } from '@mui/system';
import { Box } from '@mui/system';

export const SelfScore = () => {
    return (
        <Stack css={sx.mainContainer}>
            <Box css={sx.itemContainer} flexDirection={'row'}>
                <Box css={sx.itemWrapper}>3</Box>
                <Box css={sx.itemWrapper}>2</Box>
                <Box css={sx.itemWrapper}>3</Box>
            </Box>
        </Stack>
    );
};

const sx = {
    mainContainer: css`
        position: relative;
        height: 250px;
        padding-left: 59px;
        padding-right: 59px;
        background-color: #4a7199;
    `,
    itemContainer: css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: center;
    `,
    itemWrapper: css`
        width: 415.77px;
        line-height: 250px;
        display: flex;
        background-color: #ffffff;
        border-radius: 10px;
        flex-direction: column;
        font-size: 50pt;
    `,
};
