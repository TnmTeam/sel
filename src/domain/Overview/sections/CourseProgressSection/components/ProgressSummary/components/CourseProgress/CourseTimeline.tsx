import { css } from '@emotion/react';
import { Stack, Typography } from '@mui/material';
import { CourseItemType } from './types/CourseProgress.type';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

export const CourseTimeline = ({title, date, time, dept}: CourseItemType) => {

    const Separator =( {dept} : {dept:number;} ) => {

        if(dept == 2){
            return ( <TimelineSeparator>
                <TimelineDot variant="outlined"  color="secondary"/>
                <TimelineConnector style={{ background: '#147ad6' }}/>
            </TimelineSeparator>);
        }else if(dept == 1){
            return ( <TimelineSeparator>
                <TimelineDot variant="outlined"/>
                <TimelineConnector/>
            </TimelineSeparator>);
        }else{
            return ( <TimelineSeparator>
                <TimelineDot variant="outlined"/>
            </TimelineSeparator>);
        }
        
    };
    
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
                    <Separator dept={dept}/>
                    <TimelineContent>
                        <Typography variant="subtitle1" component="span" >
                            {title}
                        </Typography>
                        <Typography css={sx.date}>
                            {date}
                        </Typography>
                        <Typography css={sx.desc} mt={"10px"}>
                            Task that needs to be done here.
                        </Typography>
                        <Typography css={sx.time}>
                            {time}
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
        height: 100px;
        display: -webkit-box;
    `,
    date: css`
        position: absolute;
        width: 100px;
        height: 20px;
        left: 165px;
        top: 9px;
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        line-height: 20px;
        text-align: right;
        letter-spacing: 0.02em;
        color: #147AD6;
    
    `,
    desc: css `
        width: 133px;
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 20px;
        letter-spacing: 0.02em;
        color: #0A0B26;
        opacity: 0.5;
    `,
    time: css `
        position: absolute;
        width: 100px;
        height: 20px;
        left: 165px;
        top: 32px;
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 20px;        
        text-align: right;
        letter-spacing: 0.02em;
        color: #0A0B26;
    `,
  };

  