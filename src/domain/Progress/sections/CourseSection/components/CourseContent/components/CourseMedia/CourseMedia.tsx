import { Stack, Typography } from '@mui/material';
import { css } from '@emotion/react';
import { ActivityContent, ReadContent, WatchContent, NoContent } from './media';
import { DetailCourseType } from '@/domain/Progress/types/course.type';
import { DefaultContent } from './media/DefaultContent/DefaultContent';

type CourseMediaType = {
    selectedDetailCourse: DetailCourseType | null;
};

export const CourseMedia = ({ selectedDetailCourse }: CourseMediaType) => {

    const Media =( {selectedDetailCourse} : {selectedDetailCourse:DetailCourseType;} ) => {
        return  useMediaContentByCourseType(  selectedDetailCourse?.type, selectedDetailCourse);
    }

    return (
        <Stack css={sx.mediaContainer}>
            {selectedDetailCourse &&
                selectedDetailCourse?.type !== '' ? (
                    <Media selectedDetailCourse={selectedDetailCourse}/>
                ) : (
                    <DefaultContent />
                )
            }
        </Stack>
    );
};

const sx = {
    mediaContainer: css`
        flex: 1;
        height: 754px;
    `,
};

const useMediaContentByCourseType = (type: string, selectedDetailCourse: DetailCourseType) => {

     switch (type) {
        case "assessmentV2":
             return <ActivityContent selectedDetailCourse={selectedDetailCourse} />;
        case "embed":
             return <WatchContent selectedDetailCourse={selectedDetailCourse} />;
         case "pdf":
             return <ReadContent selectedDetailCourse={selectedDetailCourse} />;
        default:
            return <NoContent></NoContent>;
     }
};
