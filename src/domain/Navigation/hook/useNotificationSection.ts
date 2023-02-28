import { useRecoilValue } from 'recoil';
import { courseMapState, studentMapState } from "@/common/atom/Atom";
import { useGetNotificationPopup } from '@/data/api/navigation/useNavigationApiHooks';
import { NotificationType } from '../type/notification.type';
import { useEffect, useState } from 'react';


export const useNotificationSection = () => {
  
  const currenCourseMap:any = useRecoilValue(courseMapState);
  const currenStudentMap:any = useRecoilValue(studentMapState);
  const [courseId , setCourseId]= useState("");
  const [studentId , setStudentId]= useState("");
  useEffect(()=> {
    setCourseId(currenCourseMap.course_id);
    setStudentId(currenStudentMap.lw_id);
  },[currenCourseMap, currenStudentMap])
  

  const { data, isLoading } = useGetNotificationPopup(studentId, courseId);
  
  if (!data || !studentId || !courseId) {
    return {
      courseProgressState: {
          result: null,
          isLoading: isLoading,
      },
    };
  }


  // Notification

  const models: NotificationType[] = [];

  data.map( (it, index) => {
        models[index] = {
            content: it.content,
            createdAt: it.created_at
        }
    }
  );



  return {
    notificationState: {
      result: {
        models: models,
      },
      isLoading: isLoading,
    },
  };
};
