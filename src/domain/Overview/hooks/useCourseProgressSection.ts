import { useGetCourseProgress } from "@/data/api/overview/useOverviewApiHooks";
import { CourseItemType } from "../sections/CourseProgressSection/components/ProgressSummary/components/CourseProgress/types/CourseProgress.type";
import { useRecoilValue } from 'recoil';
import { courseMapState, studentMapState } from "@/common/atom/Atom";


export const useCourseProgressSection = () => {
  
  const currenCourseMap:any = useRecoilValue(courseMapState);
  const currenStudentMap:any = useRecoilValue(studentMapState);
  
  const studentId = currenStudentMap.lw_id;
  const courseId = currenCourseMap.course_id;

  const { data, isLoading } = useGetCourseProgress(studentId, courseId);
  
  if (!data) {
    return {
      courseProgressState: {
          result: null,
          isLoading: isLoading,
      },
    };
  }

  // console.log("useCourseProgressSection data ",data);


  // CourseProgress

  const plain: CourseItemType[] = [];

  data.map( (it, index) => {
      plain[index] = {
        title: it.unit_title,
        progress: it.unit_progress+"%",
        time: it.time_on_unit+" Minutes",
        dept: index
      }
    }
  );

  const models = {
    title: "Course Progress",
    plain: plain
  }

  // console.log("models " , models);


  return {
    courseProgressState: {
      result: {
        models: models,
      },
      isLoading: isLoading,
    },
  };
};
