import { css } from '@emotion/react';
import { Grid } from '@mui/material';
import { Colors } from '@/common/themes/Color';
import SimpleImageSlider from 'react-simple-image-slider';


export const Previews = () => {

    const images = [
        "/assets/login/slide1.png",
        "/assets/login/slide2.png",
        "/assets/login/slide3.png"
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
                    width: "80.86%",
                    height: "98.93%",
                    margin: "auto",
                }}
                images={images}
                showNavs={true}        // left and right arrows
                showBullets={true}     // Toggle Bullets
                autoPlay={true}
                autoPlayDelay={3}
            />
        </Grid>
    );
};

const sx = {
    sample: css``,
};
