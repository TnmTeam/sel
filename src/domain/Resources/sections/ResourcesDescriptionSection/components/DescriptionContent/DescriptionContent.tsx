import { css } from '@emotion/react';
import { Stack, Typography } from '@mui/material';

export const DescriptionContent = () => {
    return (
        <Stack css={sx.contentContainer}>
            <Typography variant='h1'>Resources</Typography>
            <Typography sx={{ marginTop: 5 }}>
                Explore research-based practices in leadership, self-efficacy,
                and other non-cognitive areas of study that help young people
                develop the skills requisite for achieving high-impact outcomes.
            </Typography>
            <br></br>
            <Typography>
                Grow your empathy and gain the perspective of walking in the
                shoes of others as you survey the community around you for any
                areas of need. Develop the impact of others with intention.
            </Typography>
            <br></br>
            <Typography>
                Click on a section on the wheel to get more details on each
                skill we go through and how you can help.
            </Typography>
        </Stack>
    );
};

const sx = {
    contentContainer: css``,
};
