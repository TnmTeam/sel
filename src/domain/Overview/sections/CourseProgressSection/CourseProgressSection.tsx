import { CourseProgressApiType } from '../../types/courseProgress.type';
import { ProgressSummary } from './components';


type  DataType = {
    data: CourseProgressApiType;
}
export const CourseProgressSection = ({data}: DataType) => {
    return <ProgressSummary data={data} />;
};
