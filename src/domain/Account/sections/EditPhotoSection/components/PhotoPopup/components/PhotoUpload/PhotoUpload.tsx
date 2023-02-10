import { useState, useRef, useEffect } from 'react';
import { css } from '@emotion/react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { PhotoType } from '../types/photo.type';

export const PhotoUpload = ({ ratio, rotate }: PhotoType) => {
    const [uploadedImage, setUploadedImage] = useState<string>();
    const uploadBoxRef = useRef<HTMLDivElement>();

    useEffect(() => {
        const uploadBox: HTMLDivElement | undefined = uploadBoxRef.current;
        
        const handleFiles = (file: File) => {
            if (file === undefined) {
                return;
            }

            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onloadend = (e) => {
                    const result: string | ArrayBuffer | null = e.target!.result;
                    if(typeof result === 'string') {
                        setUploadedImage(result);
                    }
                }
                reader.readAsDataURL(file);
            }
        };

        const dropHandler = (event: any) => {
            event.preventDefault();
            event.stopPropagation();
            const file = event.dataTransfer.files[0];
            handleFiles(file);
        };
        
        const dragOverHandler = (event: Event) => {
            event.preventDefault();
            event.stopPropagation();
        };
        
        if(uploadBox) {
            uploadBox.addEventListener('drop', dropHandler);
            uploadBox.addEventListener('dragover', dragOverHandler);
        }

        return () => {
            if(uploadBox) {
                uploadBox.removeEventListener('drop', dropHandler);
                uploadBox.removeEventListener('dragover', dragOverHandler);
            }
        };
    }, [uploadedImage]);

    return (
        <Box css={ st.photoBox } ref={ uploadBoxRef }>
            {
                !!uploadedImage
                    ? <div css={ st.imageBox }>
                        <img
                            src={ `${ uploadedImage }` }
                            css={ zoomCss(ratio, rotate) }
                            alt='Invalid image file.'
                        />
                    </div>
                    : <>
                        <Typography component='h1' variant='h4' sx={{color: '#979797', position: 'absolute', top: '105px', left: 'calc(50% - 80px)'}}>
                            Drag Photo
                        </Typography>
                        <Typography component='h1' variant='h4' sx={{color: '#979797', position: 'absolute', top: '150px', left: 'calc(50% - 35px)'}}>
                            Here
                        </Typography>
                    </>
            }
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
    `
}

const zoomCss = (ratio: number, rotate: number) => {
    return css`
        zoom: calc(${ratio}/100*1.5 + 0.5);
        transform-origin: 140px 140px;
        transform: rotate( ${rotate * 90}deg );
    `
}
