import { Stack } from '@mui/system';
import { PhotoPopup } from './components';
import { PhotoUpload } from './components/PhotoPopup/components';

export const EditPhotoSection = () => {
    return (
        <Stack>
            <PhotoPopup />
            <PhotoUpload />
        </Stack>
    );
};
