import { Stack } from '@mui/system';
import { PhotoPopup, PhotoUpload } from './components';

export const EditPhotoSection = () => {
    return (
        <Stack>
            <PhotoPopup />
            <PhotoUpload />
        </Stack>
    );
};
