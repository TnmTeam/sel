import { useRef, useEffect } from 'react';
import { css } from '@emotion/react';
import {
    Stack,
    Slider,
    Button,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CachedIcon from '@mui/icons-material/Cached';
import { Colors } from '@/common/themes/Color';
import { PhotoType } from '../types/photo.type';

export const PhotoZoom = ({ ratio, setRatio, rotate, setRotate }: PhotoType) => {

    const ratioChangeHandler = (e: Event, newValue: number | number[]) => {
        if(setRatio) {
            setRatio(newValue as number);
        }
    };

    const sliderRef = useRef<HTMLSpanElement>(null);
    useEffect(() => {
        const slider: HTMLSpanElement | undefined | null = sliderRef.current;
        if(slider) {
            const wheelHandler = (e: any) => {
                if (e.deltaY == 0) {
                    return;
                }
                e.preventDefault();
                if(e.deltaY < 0 && ratio < 97) {
                    if(setRatio) {
                        setRatio(ratio+3);
                    }
                } else if(e.deltaY > 0 && ratio > 3) {
                    if(setRatio) {
                        setRatio(ratio-3);
                    }
                }
            };
            slider.addEventListener('wheel', wheelHandler);

            return () => slider.removeEventListener('wheel', wheelHandler);
        }
    }, [ratio]);

    const rotateHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        e.stopPropagation();
        if(setRotate) {
            setRotate((rotate+1)%4);
        }
        return;
    }

    return (
        <Stack spacing={2} mb={5} direction='row' alignItems='center'>
            <SearchIcon />
            Zoom
            <div
                css={{ width: '100%' }}
            >
                <Slider
                    defaultValue={50}
                    aria-label='Volume'
                    value={ ratio }
                    onChange={ ratioChangeHandler }
                    color='secondary'
                    ref={ sliderRef }
                />
            </div>
            <Button
                css={st.button}
                onClick={ (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => rotateHandler(e) }
            >
                Rotate
            </Button>
            <CachedIcon />
        </Stack>
    )
}

const st = {
    button: css`
        display: flex;
        flexDirection: column;
        m: auto;
        color: ${ Colors.BackBlue }
        ':hover': {
            color: ${ Colors.ActiveBlue }
        }
    `
}