import { css } from '@emotion/react';
import { Stack } from '@mui/system';
import { OnChangeDateType, ScheduleDatePickerType } from './types/ScheduleDatePicker.type';
import {useState} from 'react';

import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { addDays } from 'date-fns';


export const ScheduleDatePicker = ({picDate, changeDate, disabledYN}: ScheduleDatePickerType) => {
    
    const [state, setState] = useState(
        {
          startDate: picDate?.startDate,
          endDate: picDate?.endDate,
          key: picDate?.key
        }
    );

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
        return disabledYN;
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
                        
                        console.log("item.selection.startDate ", item.selection.startDate);
                        console.log("item.selection.endDate ", item.selection.endDate);
                        console.log("item.selection.key ", item.selection.key);
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
                // disabledDay={disabledDay}
            />

                <Stack 
                    style={{
                        top:"100px",
                        width:"330px",
                        height:"260px",
                        position: "absolute",
                        border: "3px solid red",
                    }}
                >
                </Stack>
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
