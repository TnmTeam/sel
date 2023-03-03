import { css } from '@emotion/react';
import { Stack } from '@mui/material';
import Image from 'next/image';
import OverViewBackgroundImage from '@/assets/overview/img-background.png';
import {
    CourseProgressSection,
    ImpacterScoreSection,
    CourseScheduleSection,
} from '../sections';
import { FeaturedImpactorVideosSection } from '../sections';
import { SelfScoresSection } from '../sections';
import { FeaturedStudentWorkSection } from '../sections/FeaturedStudentWorkSection/FeaturedStudentWorkSection';
import { useOverView } from './useOverView';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { IntercomBoot } from '@/pages/_app';
import { courseMapState, studentMapState } from '@/common/atom/Atom';
import { useEffect, useState } from 'react';

export const OverviewView = () => {

    const currenCourseMap:any = useRecoilValue(courseMapState);
    const currenStudentMap:any = useRecoilValue(studentMapState);

    const studentMapHandlerState = useSetRecoilState(studentMapState);
    const courseMapHandlerState = useSetRecoilState(courseMapState);
    
    
    
    
    /*
    useEffect(() =>{   
    if(Object.keys(currenStudentMap).length == 0){
        //console.log("gd");
        
        //console.log(window.sessionStorage);
        var jsonObj = JSON.parse(window.sessionStorage.persistAtom);
        //console.log(jsonObj);
        studentMapHandlerState(jsonObj.studentMap);
        courseMapHandlerState(jsonObj.courseMap);
        
    }
    });
    */
    const [studentName , setStudentName]= useState("");
    useEffect(()=> {
        setStudentName(currenStudentMap.name);
    },[currenStudentMap])

    IntercomBoot(studentName);

    const { impacterSocreState, courseScheduleState, courseProgressState } = useOverView();
    // return (
    //     <Stack css={sx.overviewContainer}>
            
    //     </Stack>
    // );

    return (
        <Stack css={sx.overviewContainer}>
            <ImpacterScoreSection data={impacterSocreState} />
            <Stack direction={'row'} css={sx.CourseContainer}>
                <CourseProgressSection data={courseProgressState} />
                <CourseScheduleSection data={courseScheduleState} />
                
                // TO DO: Phase 1. demo hide
                //<FeaturedStudentWorkSection />
                
            </Stack>
            
                // TO DO: Phase 1. demo hide
            <SelfScoresSection />
            <FeaturedImpactorVideosSection />
        </Stack>
    );
};

const sx = {
    overviewContainer: css`
        height: 100%;
        position: relative;
        overflow: hidden;
        background-color: #4a7199;
    `,
    backgroundImage: css`
        position: absoulte;
        top: 0;
        left: 0;
    `,

    CourseContainer: css`
        width: 100%;
        height: 470px;
        background: #4a7199;
    `,
};

const OverViewImage = () => (
    <Stack css={sx.backgroundImage}>
        <Image
            objectFit='cover'
            src={OverViewBackgroundImage}
            alt={'overview'}
        />
    </Stack>
);
