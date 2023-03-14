import { css } from '@emotion/react';
import { Stack } from '@mui/system';
import { ScheduleDetailBox } from './ScheduleDetailBox';
import { ScheduleDetailBoxType } from './types/ScheduleDetailBox.type';
import dayjs, { Dayjs } from 'dayjs';
import { useState, useEffect } from 'react';
import axios from 'axios';

export const ScheduleDetailBoxList = ({picDate}: ScheduleDetailBoxType) => {
    
const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

    let startDate = new Date();
    let endDate = new Date();

    if(picDate != null)
    {
        startDate = new Date(picDate?.startDate);
        endDate = new Date(picDate?.endDate);
    }
    
    const dayName = dayNames[startDate.getDay()];
    const dayNumber = startDate.getDate();


    // API 
    // getDetailList
    /*
    const url = "";
    const [detailList, setDetailList] = useState([]);
    useEffect(() => {
        const test = async () => {
            try {
                setDetailList([]);

                const params = {};
                const response = await axios.get(url, { params });

                setDetailList([]);
            } catch (e) {
                console.log(e);
            }
        };

        test();

    }, [picDate]);
    */


    return (
        <Stack css={sx.scheduleDetailList}>            
            <Stack css={sx.scheduleBox}>
            
            {/* <div css={sx.comingSoon}>Coming Soon</div> */}

                <Stack css={sx.popupDate}>
                    {dayNumber} {dayName}
                </Stack>

                {/* 
                {detailList.map((item, index) => (
                    <ScheduleDetailBox
                        key={index}
                        title={item.title}
                        time={item.time}
                    />
                ))}
                */}

                <ScheduleDetailBox
                    title={"Lesson 2 Due"}
                    time={"9:00am"}
                />
                <ScheduleDetailBox
                    title={"Lesson 3 Due"}
                    time={"9:00am"}
                />
                <ScheduleDetailBox
                    title={"Lesson 4 Due"}
                    time={"9:00am"}
                />
                
            </Stack>
        </Stack>
    );
};


const sx = {
    scheduleBox: css`
        position: sticky;
        left: 471.53px;
        margin-bottom: 20px;
    `,
    popupDate: css`
        height: 108px;
        padding-top: 35px; 
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 31px;
        letter-spacing: 0.02em;
        color: #0A0B26;

        display:
    `,
    scheduleDetailList: css`
        align-items: center;
        width: 100%;
        /*
        margin-top: 108px;
        */
       
       display: none;
    `,    
    comingSoon: css`
        background: rgba(0, 0, 0, 0.7);
        font-size: 50px;
        color: white;
        position: absolute;
        width: 380px;
        line-height: 462px;
        text-align: center;        
        z-index: 999;
        margin-left: -35px;
    `,
};
