import { css } from '@emotion/react';
import { Stack } from '@mui/system';
import { Box } from '@mui/system';
import { SelfScoreItem } from './SelfScoreItem';

export const SelfScore = () => {
    return (
        <Stack css={sx.mainContainer}>
            <Box css={sx.itemContainer} flexDirection={'row'}>
                <Box css={sx.itemWrapper}>
                <div css={sx.comingSoon}>Coming Soon</div>
                    <SelfScoreItem
                        selfCnt={1}
                        selfValue={3}
                        progress={60}
                        progressDesc={'Grit'}
                    />
                </Box>
                <Box css={sx.itemWrapper}>
                <div css={sx.comingSoon}>Coming Soon</div>
                    <SelfScoreItem
                        selfCnt={2}
                        selfValue={2}
                        progress={40}
                        progressDesc={'Compassion'}
                    />
                </Box>
                <Box css={sx.itemWrapper}>    
                <div css={sx.comingSoon}>Coming Soon</div>                
                    <SelfScoreItem
                        selfCnt={3}
                        selfValue={3}
                        progress={60}
                        progressDesc={'Honesty'}
                    />
                </Box>
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
    comingSoon: css`
        background: rgba(0, 0, 0, 0.7);
        font-size: 60px;
        color: white;
        position: absolute;
        width: 415.77px;
        height: 250px;
        border-radius: 10px;
        z-index: 999;
    `,
};
