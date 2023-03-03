import { Grid } from '@mui/material';
import { Authentication, Previews } from './components';
import { useRecoilValue } from 'recoil';
import { courseMapState, studentMapState } from '@/common/atom/Atom';
import { useEffect, useState } from 'react';
import router from 'next/router';

export const LoginSection = () => {
    const currenCourseMap:any = useRecoilValue(courseMapState);
    const currenStudentMap:any = useRecoilValue(studentMapState);
    const [studentName , setStudentName]= useState("");
    useEffect(()=> {
        if(currenStudentMap.name != undefined){
            setStudentName(currenStudentMap.name);
            router.push({pathname: "/overview"});
        }
    },[currenStudentMap, currenCourseMap])
    
    
    return (
        <Grid container height={'100%'} minHeight={'800px'}>
            <Previews />
            <Authentication />
        </Grid>
    );
};
