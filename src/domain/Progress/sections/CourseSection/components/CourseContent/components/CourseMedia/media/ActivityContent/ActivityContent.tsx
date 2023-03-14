import { Colors } from '@/common/themes/Color';
import { css } from '@emotion/react';
import { Stack, Typography } from '@mui/material';
import { AnswerItem } from './AnswerItem';
import {
    ContentItem1,
    DetailCourseType,
} from '@/domain/Progress/types/course.type';
import { useGetUnitItemContent1 } from '@/data/api/progress/useProgressApiHooks';
import { NoContent } from '../NoContent/NoContent';

type CourseMediaType = {
    selectedDetailCourse: DetailCourseType | null;
};

export const ActivityContent = ({ selectedDetailCourse }: CourseMediaType) => {
    var studentId = '';
    var courseId = '';
    var unitIds = '';
    var title = '';
    if (selectedDetailCourse) {
        studentId = selectedDetailCourse.studentId;
        courseId = selectedDetailCourse.courseId;
        unitIds = selectedDetailCourse.unitId;
        title = selectedDetailCourse.title;
    }

    var data1 = useGetUnitItemContent1(studentId, courseId, unitIds);
    var models = data1.data;
    
    //export const ActivityContent = () => {
    return (
        <Stack css={sx.root}>
            <Stack css={sx.container}>
                {models && models?.length > 0 ? (
                    <Stack spacing={'20px'}>
                        <Typography
                            variant="h5"
                            fontWeight={'bold'}
                            color="#1B2137"
                            sx={{ opacity: "0.7"}}
                        >
                            {title}
                        </Typography>
                        <Typography
                            sx={{borderBottom: 1, borderColor: '#DBB5C8'}}
                        >
                        </Typography>
                        {models?.map((it, index) => (
                            <AnswerItem
                                key={index}
                                question={it.question}
                                answer={it.answer}
                            />
                        ))}
                    </Stack>
                ) : (
                    <></>
                )}
            </Stack>
        </Stack>
    );
};

const sx = {
    root: css`
        width: 96%;
        height: 740px;
        display: flex;
        overflow: auto;
        align-items: center;
        padding-top: 10px;
    `,

    container: css`
        position: relative;
        width: 96%;
        height: 483px;
    `,
};
