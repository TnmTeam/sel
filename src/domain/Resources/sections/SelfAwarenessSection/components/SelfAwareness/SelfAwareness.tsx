import { css } from '@emotion/react';
import { Stack, Typography } from '@mui/material';
import PlayCircleRoundedIcon from '@mui/icons-material/PlayCircleRounded';
import Videoimg from '@/assets/resources/img-selfAwareness-Thumnail.png';
import Image from 'next/image';

export const SelfAwareness = () => {
    return (
        <Stack css={sx.contentContainer}>
            <Typography fontSize="14px" lineHeight="18.23px" mt={"47px"} mb={"47px"}>Resources {`>`} Self Awareness</Typography>
            <Typography variant="h3" fontSize="30px" lineHeight="39.06px" mb={"22px"}>Self Awareness</Typography>
            <Typography css={sx.details} height="207px">
                Explore research-based practices in leadership, self-efficacy, and other{`\n`}
                non-cognitive areas of study that help young people develop {`\n`}
                the skills requisite for achieving high-impact outcomes.{`\n`}
                {`\n`}
                Grow your empathy and gain the perspective of walking in the shoes of{`\n`}
                others as you survey the community around you for any areas of need.{`\n`}
                Develop the impact of others with intention.</Typography>
            <Typography variant="h3" fontSize="25px" lineHeight="32.55px" mb={"28px"}>What is Identity</Typography>
            <Typography css={sx.details}>
                Explore research-based practices in leadership, self-efficacy, and other{`\n`}
                non-cognitive areas of study that help young people develop{`\n`}
                the skills requisite for achieving high-impact outcomes.{`\n`}
                {`\n`}
                Grow your empathy and gain the perspective of walking in the shoes of{`\n`}
                others as you survey the community around you for any areas of need.{`\n`}
                Develop the impact of others with intention.{`\n`}
                {`\n`}
                Grow your empathy and gain the perspective of walking in the shoes of{`\n`}
                others as you survey the community around you for any areas of need.{`\n`}
                Develop the impact of others with intention.{`\n`}
            </Typography>
            <Image css={sx.Videoimg} src={Videoimg} alt="img"/>
        </Stack>
    );
};

const sx = {
    contentContainer: css`
        white-space: pre-line;
        height: 884px;
        weight: 1461px;
        left: -21px;
        margin-left: 113px;
    `,
    details: css`
        width: 627px;
        height: 207px;
        left: 92px;
        font-weight: 400;
        font-size: 18px;
        line-height: 23.44px;
    `,
    Videoimg: css`
        position: absolute;
        width: 545px;
        height: 670px;
        margin-left: 676px;
        top: 815px;
        border-radius: 20px;
    `,
};
