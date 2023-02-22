import { useGetImpacterScore } from "@/data/api/overview/useOverviewApiHooks";
import { useRecoilValue } from 'recoil';
import { courseMapState, studentMapState } from "@/common/atom/Atom";

export const useImpacterScoreSection = () => {
  const currenCourseMap:any = useRecoilValue(courseMapState);
  const currenStudentMap:any = useRecoilValue(studentMapState);
  const { data, isLoading } = useGetImpacterScore(currenStudentMap.lw_id, currenCourseMap.course_id);
  
  if (!data) {
    return {
        impacterSocreState: {
            result: null,
            isLoading: isLoading,
        },
    };
  }
  
  // impacterSocre
  const [studentName, rate, url] = [
    data?.name,
    data?.impacter_socre,
    data?.media,
  ];
  
  return {
    impacterSocreState: {
      result: {
        impacterScore: {
            rate: rate,
            studentName: studentName,
            url: url,
        },
      },
      isLoading: isLoading,
    },
  };
};
