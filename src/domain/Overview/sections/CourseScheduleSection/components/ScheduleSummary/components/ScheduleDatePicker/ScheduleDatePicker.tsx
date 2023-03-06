import { css } from '@emotion/react';
import { Stack } from '@mui/system';
import { OnChangeDateType, ScheduleDatePickerType } from './types/ScheduleDatePicker.type';
import {useEffect, useState} from 'react';

import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { addDays } from 'date-fns';


export const ScheduleDatePicker = ({picDate, changeDate, disabledYN}: ScheduleDatePickerType) => {
    
    let startDate = picDate?.startDate;
    let endDate = picDate?.endDate;
    let dateFlag = false;

    if( !(startDate instanceof Date && isFinite(startDate.getTime())) )
    {
        // API Date value null 
        startDate = new Date();
        endDate = new Date();
        dateFlag = true;
    }
    else
    {
        dateFlag = false;
    }
     



    const [state, setState] = useState(
        {
          startDate: startDate,
          endDate: endDate,
          key: picDate?.key
        }
    );
        
    
    useEffect(() => {

        setState(
            {
                // startDate: startDate,
                startDate: startDate ? startDate : new Date(),
                endDate: endDate,
                key: picDate?.key
            }
        );

    }, [picDate]);
    

    const onChangeRange = (changeVal: OnChangeDateType) => {
        {
            setState(
                {
                    startDate: changeVal.startDate,
                    endDate: changeVal.endDate,
                    key: changeVal.key
                }
            ); 
        }
    }

    const disabledDay = () => {
        // return disabledYN;
        return dateFlag;
    }

    return (
        <Stack>
            <DateRange
                editableDateInputs={true}
                onChange={
                    (item) => {
                        const [tempStartDate, tempEndDate, tempKey] = [
                            item.selection.startDate,
                            item.selection.endDate,
                            item.selection.key
                        ];
                        
                        // console.log("item.selection.startDate ", item.selection.startDate);
                        // console.log("item.selection.endDate ", item.selection.endDate);
                        // console.log("item.selection.key ", item.selection.key);
                        if(tempStartDate && tempEndDate && tempKey)
                        {
                            const changeVal = {
                                startDate: tempStartDate,
                                endDate: tempEndDate,
                                key: tempKey
                            };

                            changeDate(changeVal);
                            onChangeRange(changeVal);
                        }
                    }
                }
                moveRangeOnFirstSelection={false}
                ranges={[state]}

                showDateDisplay={false}
                rangeColors={["#147AD6"]}
                showMonthAndYearPickers={false}
                // showMonthArrow={false}
                disabledDay={disabledDay}
            />


            


            {/* 
            {
                disabledYN ?
                (
                    <Stack 
                        style={{
                            top:"150px",
                            width:"330px",
                            height:"230px",
                            position: "absolute",
                            border: "3px solid red",
                        }}
                    >
                    </Stack>
                ): null
            } 
            */}
        </Stack>
        
    );

};

const sx = {
    sample: css`
        
    `
};
