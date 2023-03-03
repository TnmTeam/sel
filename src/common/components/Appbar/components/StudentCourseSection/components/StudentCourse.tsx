import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';
import { Stack } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { css, styled } from '@mui/material/styles';
import NativeSelect from '@mui/material/NativeSelect';
import { StudentListType, StudentType, StudentType2 } from './types/studentCourse.type';
import InputBase from '@mui/material/InputBase';
import { axiosClient } from '@/data/client/client';
import {
    courseArrayState,
    courseMapState,
    studentArrayState,
    studentMapState,
    loginInfo,
    studentCourseArray
} from '@/common/atom/Atom';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { Colors} from '@/common/themes/Color';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';
import { NavigationItems } from '@/common/themes/Color';
import Link from 'next/link';

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { FlexBlueButtons, WhiteButtons } from '@/common/themes/Color';
import { IntercomShutdown } from '@/pages/_app';

interface DataType {
    data: StudentListType;
}

export const StudentCourse = ({ data }: DataType) => {
    IntercomShutdown();
    var loginInfoMap: any = useRecoilValue(loginInfo);
    //console.log('`````', loginInfoMap);
    if (loginInfoMap.email == undefined) {
        location.href = '/';
        return <></>;
    } else {
        return (
            <Stack>
                <Student />
            </Stack>
        );
    }
};

const Student =  () => {

    const studentArrayHandlerState = useSetRecoilState(studentArrayState);
    const courseArrayHandlerState = useSetRecoilState(courseArrayState);

    const studentMapHandlerState = useSetRecoilState(studentMapState);
    const courseMapHandlerState = useSetRecoilState(courseMapState);


    // const currenStudentList = useRecoilValue(studentArrayState);
    const currenCourseMap: any = useRecoilValue(courseMapState);
    const currenStudentMap: any = useRecoilValue(studentMapState);
    const studentCourseList: any = useRecoilValue(studentCourseArray);

    const [courseList, setCourseList] = useState<any[]>([]);
    let studentList2 = studentCourseList;
    let courseList2 = [];

    useEffect(() => {
        studentArrayHandlerState(studentList2);
    })
    useEffect(() => {
        setCourseList(studentList2[0].courses_list);
        courseArrayHandlerState(studentList2[0].courses_list);
        courseMapHandlerState(studentList2[0].courses_list[0]);
        studentMapHandlerState(studentList2[0]);
    }, [])

    const handleChange = (event: { target: { value: string } }) => {
        // recoil에 studentMap
        if(event.target.value != '') {
            const list = studentList2.filter((item: any) => item.lw_id === event.target.value);
            //console.log(list);
            courseArrayHandlerState(list[0].courses_list);

            setCourseList([]);

            setCourseList(list[0].courses_list);
            studentMapHandlerState(list[0]);
            courseMapHandlerState(list[0].courses_list[0]);
            console.log(currenCourseMap);
        }
    }

    const handleChange2 = (event: { target: { value: string } }) => {
        let courseId = event.target.value;
        for (var i = 0; i < courseList.length; i++) {
            if (courseList[i].course_id == courseId) {
                courseMapHandlerState(courseList[i]);
            } else if (courseId == '') {
                courseMapHandlerState({});
            }
        }
    };

    return (
        <Stack sx={{display:"inline-block"}}>
            <Stack position='static'
            sx={{ height: 89, background: Colors.BackBlue, zIndex:999, width: '1440px', display:'inline-block' }}>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 100 , fontSize: 5}}>
                    <InputLabel variant="standard" htmlFor="uncontrolled-native">
                        Student
                    </InputLabel>
                    <NativeSelect
                        inputProps={{
                            name: 'Student',
                            id: 'selectStudent',
                        }}
                        onChange={handleChange}
                        input={<BootstrapInput />}
                        disabled={studentList2.length == 1 ? true : false}
                    >
                        {studentList2.map((it:any, index:any) => (
                            <StudentOption key={index} id={it.id} lw_id={it.lw_id} name={it.name} email={it.email} parent_email={it.parent_email}
                            parent_name={it.parent_name} parent_phone={it.parent_phone} parent_email2={it.parent_email2} parent_name2={it.parent_name2}
                            parent_phone2={it.parent_phone2} grade={it.grade} school={it.school} role={it.role} created_at={it.created_at}  last_login={it.last_login}
                            folder_id={it.folder_id} courses_list={it.courses_list}/>
                        )
                        )}
                        
                    </NativeSelect>
                </FormControl>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 100 , fontSize: 5}}>
                    <InputLabel variant="standard" htmlFor="uncontrolled-native">
                        Course
                    </InputLabel>    
                    <NativeSelect
                        inputProps={{
                            name: 'Course',
                            id: 'selectCourse',
                        }}
                        onChange={handleChange2}
                        input={<BootstrapInput />}
                        disabled={courseList.length == 1 ? true : false}
                    >
                        {courseList.map((it, index) => (
                            <CourseOption key={index} course_id={it.course_id} title={it.title}  />
                        )
                        )}
                        
                    </NativeSelect>
                </FormControl>
            </Stack>
        </Stack>
    );
};

const sx = {
    centerDiv: css`
        min-height: 100vh;
    `,
    inline: css`
        display: inline-block;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        padding: 30px;
    `,
    link: css`
        text-decoration-line: none;
    `,
};

const StudentOption = ({ lw_id, name }: StudentType2) => {
    return <option value={lw_id}> {name}</option>;
};
interface courseProps {
    title: string;
    course_id: string;
}

const CourseOption = ({ title, course_id }: courseProps) => {
    return <option value={course_id}> {title}</option>;
};

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(2.5),
        Colors: '#ced4da',
    },
    '& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
        },
    },
}));

