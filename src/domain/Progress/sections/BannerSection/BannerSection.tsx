import { CustomProgress } from "@/common/components/progress";
import { Stack } from "@mui/material";
import { BannerStateType } from "../../types/banner.type";
import { Banner, CourseProgressList } from "./components";

type DataType = {
  data: BannerStateType;
};

export const BannerSection = ({ data }: DataType) => {
  if (!data.result || data.isLoading) {
    return (
      <Stack height={"452px"}>
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
