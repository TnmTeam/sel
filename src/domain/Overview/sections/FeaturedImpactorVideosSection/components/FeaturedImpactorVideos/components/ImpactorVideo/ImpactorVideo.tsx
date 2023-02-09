import { css } from '@emotion/react';
import { Stack } from '@mui/system';
import { VideoCard } from './components';
import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';
import { VideoCard2, VideoCard3 } from './components/VideoCard/VideoCard';
import axios from 'axios';
import { useState, useEffect } from 'react';

export const ImpactorVideo = () => {
    const url = 'https://www.googleapis.com/youtube/v3/playlistItems';
    const key = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
    const playlistId = 'PL_Fk-rxNO8-v4H7y_liullznJ7xFZgViv';
    const part = 'snippet,contentDetails';

    const [isLoading, setIsLoading] = useState(false);
    const [videoList, setVideoList] = useState([]);

    useEffect(() => {
        const fetchVideoList = async () => {
            try {
                setVideoList([]);

                const params = {
                    key,
                    playlistId,
                    part
                }
                const response = await axios.get(url, {params});

                setVideoList(response.data.items);
                console.log(response.data.items);
            } catch(e) {
                console.log(e);
                alert('error 임시로 메세지만');
            }
        }

        fetchVideoList();

        // 아래 tsx 부분에 videoList로 VideoCard 구성하면 됨
        // 최초 mount 시에는 빈 배열이다가 api 결과 도착하면 자동으로 re-rendering 함
        // 로딩, 데이터 없을 경우 처리는 생략했으니 구현해야 함
        // 로딩: isLoading 값에 따라서 loading component 보일지 말지 구성
        // next.config.js 설정 중 reactStrictMode: true인 경우 개발 환경에서는 2번 호출됨
        // 해당 설정을 false로 바꾸면 1번만 호출됨
    }, [setVideoList])

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
                }} variant="outlined"
            >View All</Button>
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
