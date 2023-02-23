import { useRecoilValue } from 'recoil';
import { courseMapState, studentMapState } from "@/common/atom/Atom";
import { useGetNotificationPopup } from '@/data/api/navigation/useNavigationApiHooks';
import { NotificationType } from '../type/notification.type';


export const useNotificationSection = () => {
  
  const currenCourseMap:any = useRecoilValue(courseMapState);
  const currenStudentMap:any = useRecoilValue(studentMapState);
  
  const studentId = currenStudentMap.lw_id;
  const courseId = currenCourseMap.course_id;

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
