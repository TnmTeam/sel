import { css } from '@emotion/react';
import { Grid } from '@mui/material';
import { Colors } from '@/common/themes/Color';
import SimpleImageSlider from 'react-simple-image-slider';


export const Previews = () => {

    const images = [
        "/assets/login/slide1_4x.png",
        "/assets/login/slide2_4x.png",
        "/assets/login/slide3_4x.png"
    ]

    return (
        <Grid
            item
            xs={false}
            sm={6}
            md={6}
            sx={{
                background: Colors.BackBlue,
                // backgroundImage: 'url(https://source.unsplash.com/random)',
                // backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <SimpleImageSlider
                width={"100%"}
                height={"100%"}
                style={{
                    position: "relative",
                    background: Colors.BackBlue,
                    width: "100%",
                    height: "100%",
                    margin: "auto",
                }}
                images={images}
                showNavs={true}        // left and right arrows
                showBullets={true}     // Toggle Bullets
                autoPlay={false}
                // autoPlayDelay={3}
            />
        </Grid>
    );
};

const sx = {
    sample: css``,
};
