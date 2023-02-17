import { CustomProgress } from "@/common/components/progress";
import { Stack } from '@mui/material';
import { ImpacterScore } from './components';
import { ImpacterScoreType } from '../../types/impacterScore.type';

type DataType = {
    data: ImpacterScoreType;
  };

export const ImpacterScoreSection = ({ data }: DataType) => {
    if (!data.result || data.isLoading) {
        return (
            <Stack height={"452px"} justifyContent="center" alignItems={"center"}>
                <CustomProgress />
            </Stack>
        );
      }
      return (
            <ImpacterScore models={data.result?.impacterScore!!} />
      );
};
