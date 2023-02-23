import { useGetStudentSuccessJourney } from "@/data/api/progress/useProgressApiHooks";
import { useRecoilValue } from 'recoil';
import { courseMapState } from "@/common/atom/Atom";

export const useJourneySection = () => {

  const currenCourseMap:any = useRecoilValue(courseMapState);
  var courseId      = currenCourseMap.course_id;

  const { data, isLoading  } = useGetStudentSuccessJourney(courseId);

  if (!data) {
    return {
      journeyState: {
        result: null,
        isLoading: isLoading,
      },
    };
  }
  let journeyList = [];
  for(let i = 0 ; i < data.length ; i++){
    let journey = {
      id : data[i].id,
      courseTitle : data[i].course_title,
      courseDescription : data[i].course_description,
      courseThumbnail: data[i].course_thumbnail,
      numberInSequence: data[i].number_in_sequence,
      courseFamily: data[i].course_family,
      isHere: data[i].is_here
    };
    journeyList.push(journey);
  }
  
  return {
    journeyState: {
      result: {
        journeyList: journeyList,
      },
      isLoading: isLoading,
    },
  };
};
