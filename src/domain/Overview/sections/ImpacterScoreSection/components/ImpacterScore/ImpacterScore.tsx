import { Stack } from '@mui/system';
import { ScoreChart, ScoreVideo } from './components';

export const ImpacterScore = () => {
    return (
        <Stack>
            <ScoreChart />
            <ScoreVideo />
        </Stack>
    );
};
