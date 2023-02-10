import { useState, useRef, useEffect } from 'react';
import { css } from '@emotion/react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

export const PhotoUpload = () => {
    const [uploadedImage, setUploadedImage] = useState<File>();
    const uploadBoxRef = useRef();

    useEffect(() => {
        const uploadBox = uploadBoxRef.current;

        const handleFiles = (file: File) => {
            if (file === undefined) {
                return;
            }

            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onloadend = (e) => {
                    const result = e.target!.result;
                    //setUploadedImage(result);
                };
                reader.readAsDataURL(file);
            }
        };

        const dropHandler = (event: any) => {
            event.preventDefault();
            event.stopPropagation();
            const files = event.dataTransfer.files[0];
            handleFiles(files);
        };

        const dragOverHandler = (event: any) => {
            event.preventDefault();
            event.stopPropagation();
        };

        //uploadBox.addEventListener('drop', dropHandler);
        //uploadBox.addEventListener('dragover', dragOverHandler);

        return () => {
            //uploadBox.removeEventListener('drop', dropHandler);
            //uploadBox.removeEventListener('dragover', dragOverHandler);
        };
    }, [uploadedImage]);

    return (
        <Box css={st.photoBox} ref={uploadBoxRef}>
            {!!uploadedImage ? (
                <div css={st.imageBox}>
                    <img src={`${uploadedImage}`} />
                </div>
            ) : (
                <>
                    <Typography
                        component='h1'
                        variant='h4'
                        sx={{
                            color: '#979797',
                            position: 'absolute',
                            top: '105px',
                            left: 'calc(50% - 80px)',
                        }}
                    >
                        Drag Photo
                    </Typography>
                    <Typography
                        component='h1'
                        variant='h4'
                        sx={{
                            color: '#979797',
                            position: 'absolute',
                            top: '150px',
                            left: 'calc(50% - 35px)',
                        }}
                    >
                        Here
                    </Typography>
                </>
            )}
        </Box>
    );
};

const st = {
    photoBox: css`
        width: 280px;
        height: 280px;
        border: 1px dashed black;
        border-radius: 140px;
        margin: auto;
        position: relative;
        margin-top: 30px;
        background: #f7f7f7;
    `,
    imageBox: css`
        width: 279px;
        height: 279px;
        overflow: hidden;
        border-radius: 140px;
    `,
};
