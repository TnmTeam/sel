import { useNotificationSection } from "../hook/useNotificationSection";

export const useNavigationView = () => {
    const { notificationState } = useNotificationSection();
  
    return {
        notificationState: notificationState,
    };
  };
