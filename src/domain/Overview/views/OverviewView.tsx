import { css } from '@emotion/react';
import { Stack } from '@mui/material';
import Image from 'next/image';
import CircleImagePng from '@/assets/overview/img-circle.png';
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
import { CustomProgress } from "@/common/components/progress";

export const OverviewView = () => {

    const currenCourseMap:any = useRecoilValue(courseMapState);
    const currenStudentMap:any = useRecoilValue(studentMapState);

    const studentMapHandlerState = useSetRecoilState(studentMapState);
    const courseMapHandlerState = useSetRecoilState(courseMapState);
    
    
    //console.log( "/overview" );
    //console.log( currenStudentMap );
   
   
    
    
    
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
                
                { /* <FeaturedStudentWorkSection /> */}
                <LinkContainer />
            </Stack>
            {/*
            <SelfScoresSection />
            */}
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



    FeaturedContainer: css`
        position: absolute;
        width: 289px;
        height: 427px;
        right: 59px;
        background: #FFFFFF;
        border-radius: 28px;
    `,
    CircleOut: css`
        position: absolute;
        width: 80px;
        height: 80px;
        left: 200.22px;
        top: 265.5px;
        color: #FFF;
    `,
    CircleIn: css`
        position: absolute;
        width: 65px;
        height: 65px;
        left: 207.72px;
        top: 273px;
        color: #6787B7;
    `,
    SendIcon: css`
        position: absolute;
        width: 25px;
        height: 25px;
        left: 230px;
        top: 292px;
        transform: matrix(0.74, -0.67, 0.65, 0.76, 0, 0);
        color: #FFF;
`,
    FavoriteIcon: css`
        width: 250px;
        height: 250px;
        position: absolute;
        left: 6.5%;        
        top: 22%;        
        color: #EA4848;
    `,
    comingSoon: css`
        background: rgba(0, 0, 0, 0.7);
        font-size: 40px;
        color: white;
        position: absolute;
        width: 289px;
        line-height: 427px;
        border-radius: 26px;
        z-index: 999;
        text-align: center;
    `,



};


const LinkContainer = () => { 
    
    const [displayFlag, setDisplayFlag] = useState(false);
    setTimeout( () => setDisplayFlag(true), 1000);

    return (
        <>
            <Stack css={sx.FeaturedContainer} 
                style={{display: displayFlag ? "none" : ""}}
            >
                <Stack height={"452px"} justifyContent="center" alignItems={"center"}>
                    <CustomProgress />
                </Stack>
            </Stack>

            
            <Stack css={sx.FeaturedContainer} 
                style={{display: displayFlag ? "" : "none"}}
            >
                <iframe src="https://flext.typeform.com/to/AiBGxC9I" 
                    style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "28px"
                    }}
                >
                </iframe>
            </Stack>
        </>
    );
}
