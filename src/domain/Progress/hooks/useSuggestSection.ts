import { useGetSuggestedCourse } from "@/data/api/progress/useProgressApiHooks";
import { CardType } from "../types/suggest.type";
import { SuggestCourseUnits } from "@/data/api/progress/progress.dto";
import { useRecoilValue } from 'recoil';
import { courseMapState, studentMapState } from "@/common/atom/Atom";
import { useEffect, useState } from "react";

export const useSuggestSection = () => {
  const currenCourseMap:any = useRecoilValue(courseMapState);
  const currenStudentMap:any = useRecoilValue(studentMapState);

  const [courseId , setCourseId]= useState("");
  useEffect(()=> {
    setCourseId(currenCourseMap.course_id);
  },[currenCourseMap, currenStudentMap])

  const { data, isLoading } = useGetSuggestedCourse(courseId);

  if (!data) {
    return {
      suggestState: {
        result: null,
        isLoading: isLoading,
      },
    };
  }

  //const response = data.responseData;
  const response = data;
  const [cards] = [response];

  return {
    suggestState: {
      result: mappingToCards(cards),
      isLoading: isLoading,
    },
  };
};

const mappingToCards = (list: SuggestCourseUnits): CardType[] => {
  const result = list.map((it) => ({
    id: it.id,
    courseTitle: it.course_title,
    courseThumbnail: it.course_thumbnail,
    courseDescription: it.course_description,
    numberInSequence: it.number_in_sequence,
    courseFamily: it.course_family,
  }));

  return result;
};
