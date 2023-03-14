import { css } from '@emotion/react';
import { Grid, Stack } from '@mui/material';
import { Colors } from '@/common/themes/Color';
import SimpleImageSlider from 'react-simple-image-slider';
import { useEffect, useState } from 'react';

export const Previews = () => {
    const images = [
        '/assets/login/slide1_4x.png',
        '/assets/login/slide2_4x.png',
        '/assets/login/slide3_4x.png',
    ];

    return (
        <Grid
            item
            xs={false}
            sm={false}
            md={6}
            xl={6}
            sx={{
                background: Colors.BackBlue,
                // backgroundImage: 'url(https://source.unsplash.com/random)',
                // backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',                
                minHeight: '800px'
            }}
        >
            <Stack css={sx.previewImage}>
                <SimpleImageSlider
                    width={'100%'}
                    height={'100%'}
                    style={{
                        position: 'relative',
                        background: Colors.BackBlue,
                        width: '75%',                        
                        height: '75%',
                        margin: 'auto'
                    }}
                    images={images}
                    showNavs={false} // left and right arrows
                    showBullets={true} // Toggle Bullets
                    autoPlay={false}
                    // autoPlayDelay={3}
                />
            </Stack>
        </Grid>
    );
};

const sx = {
    previewImage: css`
        background: Colors.BackBlue;        
        width: 100%;
        height: 100%;        
    `,
};
