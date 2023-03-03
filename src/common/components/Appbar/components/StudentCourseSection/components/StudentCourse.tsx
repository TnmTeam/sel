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
    console.log(loginInfoMap);
    if (loginInfoMap.email == undefined) {
        location.href = '/';
        return <></>;
    } else {
        return (
            <Stack>
                {/* <Student studentList={data.studentList} /> */}
                <Student />
            </Stack>
        );
    }
};

//const Student =  ({ studentList }: StudentListType) => {
    const Student =  () => {

    const studentArrayHandlerState = useSetRecoilState(studentArrayState);
    const courseArrayHandlerState = useSetRecoilState(courseArrayState);

    const studentMapHandlerState = useSetRecoilState(studentMapState);
    const courseMapHandlerState = useSetRecoilState(courseMapState);


    const currenCourseList = useRecoilValue(courseArrayState);
    const currenStudentList = useRecoilValue(studentArrayState);
    const currenCourseMap: any = useRecoilValue(courseMapState);
    const currenStudentMap: any = useRecoilValue(studentMapState);

    const [courseList, setCourseList] = useState<any[]>([]);

    const testData = [
        {
            id: 94,
            lw_id: "6337a6e9f62401d9f405913c",
            name: "Isabella Arnold",
            email: "isabellajarnold@gmail.com",
            parent_email: "josharnold@gmail.com",
            parent_name: null,
            parent_phone: null,
            parent_email2: "clairebruinbear@gmail.com",
            parent_name2: null,
            parent_phone2: null,
            grade: "5",
            school: "Hopkinson Elementary School",
            role: "user",
            created_at: "2022-10-01 02:33:13.763088",
            last_login: "2023-02-27 00:32:40.591623",
            folder_id: null,
            courses_list: [
                {
                    id: 421,
                    created_at: "2022-10-25 00:35:31",
                    student_id: "6337a6e9f62401d9f405913c",
                    course_id: "7dlcnlym",
                    workbook_id: "1eLwKXZ3mqdk53gltoJrk7xHLfMb_VksU_KIq5on0uGA",
                    video_link: null,
                    title: "THE 7-DAY LEADERSHIP CHALLENGE - NLYM"
                },
              {
                id: 613,
                created_at: "2022-11-29 00:20:17",
                student_id: "6337a6e9f62401d9f405913c",
                course_id: "you1001",
                workbook_id: "1b035cq2ngQYiGIMW0-xAirVo3w5YKxAmNRl3ZrBGzfk",
                video_link: null,
                title: "University of YOU: Know Thyself - 1001"
              },
              {
                id: 368,
                created_at: "2022-10-01 02:33:15",
                student_id: "6337a6e9f62401d9f405913c",
                course_id: "7dlc1001",
                workbook_id: "13V3pbZu8sbc35uDJkym5tlKNkT15TV1Sk0lBQQzGNZU",
                video_link: null,
                title: "THE 7-DAY LEADERSHIP CHALLENGE - 1001"
              }
            ]
          }
    ];
    let studentList2 = testData;
    let courseList2 = [];
    //studentArrayHandlerState(studentList2);
    //studentMapHandlerState(studentList2[0]);

    setCourseList(studentList2[0].courses_list);

    
    // const Test = async () => {
    //     setCourseList(await SelectSetting(studentList)) ;
    // }
    // //useEffect(() => {Test();});
    // Test();
/*
    const handleChange = async (event: { target: { value: string } }) => {
        if (studentList != null) {
            if (event.target.value != '') {
                const list = studentList.filter(
                    (item) => item.studentId === event.target.value
                );

                var param = {
                    student_id: list[0].studentId,
                };

                const response = await axiosClient.post(
                    `/navigation/course-list`,
                    param
                );

                let courseList = [];
                let courseHandlerList = [];
                let studentHandlerList = [];

                if (response.data.length > 0) {
                    for (let i = 0; i < response.data.length; i++) {
                        let course = {
                            courseId: response.data[i].course_id.toString(),
                            courseTitle:
                                response.data[i].lw_courses.title.toString(),
                        };
                        let courseMap = response.data[i].lw_courses;
                        let studentMap = response.data[i].students;
                        courseList.push(course);
                        courseHandlerList.push(courseMap);
                        studentHandlerList.push(studentMap);
                    }

                    courseArrayHandlerState(courseHandlerList);
                    studentArrayHandlerState(studentHandlerList);

                    setCourseList(response.data.length > 0 ? courseList : []);
                    //console.log(response);
                }
            } else {
                setCourseList([]);
            }
        }
    };

    const handleChange2 = (event: { target: { value: string } }) => {
        let courseId = event.target.value;
        for (var i = 0; i < currenCourseList.length; i++) {
            if (currenCourseList[i].course_id == courseId) {
                courseMapHandlerState(currenCourseList[i]);
                studentMapHandlerState(currenStudentList[i]);
            } else if (courseId == '') {
                courseMapHandlerState({});
                studentMapHandlerState({});
            }
        }
    };

*/
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
                    //onChange={handleChange}
                    input={<BootstrapInput />}
                >
                    {studentList2.map((it, index) => (
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
                   // onChange={handleChange2}
                    input={<BootstrapInput />}
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

