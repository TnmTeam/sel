import { Stack } from '@mui/material';
import {
    SelfScore,
    SelfPieChartScore,
    SelfSplineChartScore,
} from './components';
import { Colors } from '@/common/themes/Color';

export const SelfScoresSection = () => {
    return (
        <Stack sx={{background:Colors.MedBlue}}>
            <SelfScore />
            <SelfPieChartScore />
            <SelfSplineChartScore />
        </Stack>
    );
};
