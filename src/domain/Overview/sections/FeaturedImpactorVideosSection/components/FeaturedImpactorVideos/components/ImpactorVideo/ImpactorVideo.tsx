import { css } from '@emotion/react';
import { Stack } from '@mui/system';
import { VideoCard } from './components';
import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';
import { VideoCard2, VideoCard3 } from './components/VideoCard/VideoCard';

export const ImpactorVideo = () => {

    return (
    <Stack css={sx.ImpactorVideo}>
        <h2 style={{ fontSize: "40px",
            color: "#fff", textAlign: "center", marginBottom: "50px"}}>Fetured Impactor Videos</h2>
        <Grid container spacing={0} direction="row" justifyContent="center" alignItems="center">
          <Grid xs={3.4}>
            <VideoCard></VideoCard>
          </Grid>
          <Grid xs={3.4}>
            <VideoCard2></VideoCard2>
          </Grid>
          <Grid xs={2.9}>
            <VideoCard3></VideoCard3>
          </Grid>
        </Grid>
        <Button href="https://www.youtube.com/@LearnWorlds/videos"
        style={{
        border: "1pt solid #6787B7",
        borderRadius: 3,
        backgroundColor: "#fff",
        padding: "10px",
        color: "#6787B7",
        width: "230px",
        margin: "auto",
        textTransform: "initial"
    }} variant="outlined">View All</Button>
    </Stack>
    );
};

const sx = {
    ImpactorVideo: css`
        height: 550px;
        position: relative;
        background-color: #4A7199;
    `,
};
