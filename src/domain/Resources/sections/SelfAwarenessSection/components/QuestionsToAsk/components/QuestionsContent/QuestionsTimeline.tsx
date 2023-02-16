import { css } from '@emotion/react';
import { Stack, Typography } from '@mui/material';
import { QuestionsItemType } from './types/QuestionsContentType.type';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

export const QuestionsTimeline = ({questions, answer}: QuestionsItemType) => {
    return (
        <Stack>
            <Timeline
                sx={{
                    [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0,
                    },
                }}
                css={sx.TimelineContainer}
            >
                <TimelineItem>
                    <TimelineContent>
                        <Typography variant="subtitle1" component="span" >
                           * {questions}
                        </Typography>
                        <Typography 
                            css={sx.answer} 
                            ml={'10px'}
                        >
                            {answer}
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </Stack>
    );
};


const sx = {
    TimelineContainer: css`
        padding: 0px 16px;
        height: 50px;
        display: -webkit-box;
    `,

    answer: css `
        width: 100%;
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 20px;
        letter-spacing: 0.02em;
        color: #0A0B26;
        opacity: 0.5;
    `,
  };

  