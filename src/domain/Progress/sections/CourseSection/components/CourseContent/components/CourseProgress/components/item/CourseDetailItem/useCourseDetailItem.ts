import IconNotDone from "@/assets/progress/icon/ic-not-done.svg";
import IconDone from "@/assets/progress/icon/ic-done.svg";
import IconWatch from "@/assets/progress/icon/ic-watch.svg";
import IconRead from "@/assets/progress/icon/ic-read.svg";
import IconActivity from "@/assets/progress/icon/ic-activity.svg";

export const useCourseDetailItem = () => {
  const getIconByCompeletion = (v: boolean): any => {
    return v ? IconDone : IconNotDone;
  };

  const getIconByCourseType = (courseTitle: string) => {
    const courseType = courseTitle.substring(0, 1);

    switch (courseType) {
      case "W":
        return IconWatch;

      case "R":
        return IconRead;

      case "A":
        return IconActivity;
      default:
        return IconActivity;
    }
  };

  return {
    getCompletionIcon: getIconByCompeletion,
    getCourseTypeIcon: getIconByCourseType,
  };
};
