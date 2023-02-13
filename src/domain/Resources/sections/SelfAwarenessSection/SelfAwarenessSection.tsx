import { Stack } from '@mui/system';
import { Banner , SelfAwareness, QuestionsToAsk, VideosToWatch  } from './components';

export const SelfAwarenessSection = () => {
    return (
        <Stack>
            <Banner />
            <SelfAwareness />
            <QuestionsToAsk />
            <VideosToWatch />
        </Stack>
    );
};
