import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';
import { Stack } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { css, styled } from '@mui/material/styles';
import NativeSelect from '@mui/material/NativeSelect';
import { StudentListType, StudentType, StudentType2 } from './types/studentCourse.type';
import InputBase from '@mui/material/InputBase';
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


interface DataType {
    data: StudentListType;
}

export const StudentCourse = ({ data }: DataType) => {
    //IntercomShutdown();
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
    let studentList = studentCourseList;
    if(studentList.length == 0 ){
        studentList = [{
            id : 0,
            lw_id : '',
            name : 'No Student',
            courses_list : [{
                id : 0,
                course_id : '',
                title : ''
            }]
        }]
    }
    let courseList2 = studentList[0].courses_list;

    if(courseList2.length == 0 ){
        courseList2 =  [{
            id : 0,
            course_id : '',
            title : 'No Course'
        }]
    }
    const [selectedStudentValue, setSelectedStudentValue] = useState('');
    const [selectedCourseValue, setSelectedCourseValue] = useState('');

    useEffect(() => {
        studentArrayHandlerState(studentList);
    })
    useEffect(() => {
        setCourseList(courseList2);
        courseArrayHandlerState(courseList2);
        courseMapHandlerState(courseList2[0]);
        studentMapHandlerState(studentList[0]);
        setSelectedStudentValue(studentList[0].lw_id);
        setSelectedCourseValue(courseList2[0].course_id);
    }, [])

    const handleChange = (event: { target: { value: string } }) => {
        // recoil에 studentMap
        if(event.target.value != '') {
            const list = studentList.filter((item: any) => item.lw_id === event.target.value);

            let courseList3 = list[0].courses_list;

            if(courseList3.length == 0 ){
                courseList3 =  [{
                    id : 0,
                    course_id : '',
                    title : 'No Course'
                }]
            }

            courseArrayHandlerState(courseList3);

            setCourseList([]);

            setCourseList(courseList3);
            studentMapHandlerState(list[0]);
            courseMapHandlerState(courseList3[0]);
            setSelectedStudentValue(list[0].lw_id);
            setSelectedCourseValue(courseList3[0].course_id);
        }
    }

    const handleChange2 = (event: { target: { value: string } }) => {
        let courseId = event.target.value;
        for (var i = 0; i < courseList.length; i++) {
            if (courseList[i].course_id == courseId) {
                courseMapHandlerState(courseList[i]);
                setSelectedCourseValue(courseList[i].course_id);
            } else if (courseId == '') {
                courseMapHandlerState({});
            }
        }
    };

    return (
        <Stack sx={{display:"inline-block", position: 'absolute', top: '3px', left : '195px'}}>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 100 , fontSize: 5, ml:2}}>
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
                    disabled={studentList.length == 1 ? true : false}
                    value={selectedStudentValue}
                    sx={{borderRadius: '18px', maxWidth: '180px',}}
                >
                    {studentList.map((it:any, index:any) => (
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
                    value={selectedCourseValue}
                    sx={{maxWidth: '290px',}}
                >
                    {courseList.map((it, index) => (
                        <CourseOption key={index} course_id={it.course_id} title={it.title}  />
                    )
                    )}
                    
                </NativeSelect>
            </FormControl>
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
        border: '1px solid #7ab6f1',
        fontSize: 18,
        padding: '5px 26px 5px 10px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            'DM Sans'
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            backgroundColor: '#e0edff',
            borderColor: '#46a3ff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}));

