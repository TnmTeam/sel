import { CustomProgress } from "@/common/components/progress";
import { Stack } from "@mui/material";
import { BannerStateType } from "../../types/banner.type";
import { Banner, CourseProgressList } from "./components";

import { useRecoilValue } from 'recoil';
import { courseMapState, studentMapState } from "@/common/atom/Atom";

type DataType = {
  data: BannerStateType;
};

export const BannerSection = ({ data }: DataType) => {
  
  const currenCourseMap:any = useRecoilValue(courseMapState);
  const currenStudentMap = useRecoilValue(studentMapState);
  console.log("banner");
  console.log(currenCourseMap);
  console.log(currenStudentMap);

  if (!data.result || data.isLoading) {
    return (
      <Stack height={"452px"} justifyContent="center" alignItems={"center"}>
        <CustomProgress />
      </Stack>
    );
  }
  return (
    <Stack>
      <Banner models={data.result?.banner!!} />
      <CourseProgressList models={data.result?.rates!!} />
    </Stack>
  );
};
