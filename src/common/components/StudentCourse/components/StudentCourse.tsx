import { useState} from 'react';
import { Stack } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { styled } from '@mui/material/styles';
import NativeSelect from '@mui/material/NativeSelect';
import { StudentListType, StudentType } from './types/studentCourse.type';
import InputBase from '@mui/material/InputBase';
import { axiosClient } from '@/data/client/client';
import { courseArrayState, courseMapState, studentArrayState, studentMapState } from '@/common/atom/Atom';
import { useSetRecoilState, useRecoilValue, } from 'recoil';

interface DataType {
    data: StudentListType;
}

export const StudentCourse = ({ data }: DataType) => {
    return <Stack>
            <Student studentList={data.studentList} />
        </Stack>;
};

const Student = ({ studentList }: StudentListType) => {
    const studentArrayHandlerState = useSetRecoilState(studentArrayState);
    const courseArrayHandlerState = useSetRecoilState(courseArrayState);

    const studentMapHandlerState = useSetRecoilState(studentMapState);
    const courseMapHandlerState = useSetRecoilState(courseMapState);
    const currenCourseList = useRecoilValue(courseArrayState);
    const currenStudentList = useRecoilValue(studentArrayState);
    
    const [ courseList, setCourseList ] = useState<any[]>([]);

    const handleChange = async (event: { target: { value: string } }) => {
        if(studentList != null){
            if(event.target.value != ""){

            
            const list = studentList.filter((item) => item.studentId === event.target.value);

            var param = { 
                student_id : list[0].studentId
            };
            
            const response = await axiosClient.post(`/navigation/course-list`, param);

            let courseList = [];
            let courseHandlerList = [];
            let studentHandlerList = [];
            
            for(let i = 0 ; i < response.data.length ; i ++){
                
                let course = {
                    courseId : response.data[i].course_id.toString(),
                    courseTitle : response.data[i].lw_courses.title.toString()
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
            console.log(response);

            }else{
                setCourseList([]); 
            }

           
        }
    };

    const handleChange2 = (event: { target: { value: string } }) => {
        
        let courseId = event.target.value;
        for(var i = 0 ; i < currenCourseList.length ; i++){
            if(currenCourseList[i].course_id == courseId){
                courseMapHandlerState(currenCourseList[i]);
                studentMapHandlerState(currenStudentList[i]);
            }
        }


    };
 
    return (
        <div>
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
                >
                    <option aria-label="None" value=""></option>
                    
                    {studentList.map((it, index) => (
                        <StudentOption key={index} id={it.id} studentId={it.studentId} 
                            studentName={it.studentName} studentEmail={it.studentEmail}
                            parentEmail={it.parentEmail} grade={it.grade} school={it.school}
                            role={it.role} createdAt={it.createdAt} lastLogin={it.lastLogin} />
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
                >
                    <option aria-label="None" value=""></option>
                    {courseList.map((it, index) => (
                        <CourseOption key={index} courseId={it.courseId} courseTitle={it.courseTitle}  />
                    )
                    )}
                    
                </NativeSelect>
            </FormControl>
        </div>
    );
    
};

const StudentOption = ({studentId, studentName}: StudentType) => {
 return <option value={studentId} > {studentName}</option>
}
interface courseProps {
    courseTitle: string;
    courseId: string;
}

const CourseOption = ({ courseTitle, courseId } : courseProps) => {
 return <option value={courseId} > {courseTitle}</option>
}

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
      fontSize: 14,
      
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
        borderColor: '#80bdff'
      },
    },
  }));