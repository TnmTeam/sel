import { css } from '@emotion/react';
import { Stack } from '@mui/system';
import { VideoCard } from '@/domain/Overview/sections/FeaturedImpactorVideosSection/components/FeaturedImpactorVideos/components/ImpactorVideo/components';
import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import { Colors, WhiteButtons } from '@/common/themes/Color';

export const VideosToWatch= () => {
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
                    part,
                };
                const response = await axios.get(url, { params });

                setVideoList(response.data.items);
                //console.log(response.data.items);
            } catch (e) {
                console.log(e);
                alert('error 임시로 메세지만');
            }
        };

        fetchVideoList();

        // 아래 tsx 부분에 videoList로 VideoCard 구성하면 됨
        // 최초 mount 시에는 빈 배열이다가 api 결과 도착하면 자동으로 re-rendering 함
        // 로딩, 데이터 없을 경우 처리는 생략했으니 구현해야 함
        // 로딩: isLoading 값에 따라서 loading component 보일지 말지 구성
        // next.config.js 설정 중 reactStrictMode: true인 경우 개발 환경에서는 2번 호출됨
        // 해당 설정을 false로 바꾸면 1번만 호출됨
    }, [setVideoList]);

    return (
        <Stack css={sx.VideosToWatch}>
            <Typography variant='h2' color={Colors.Text100} ml={8} mt="63px">
                Videos to Watch
            </Typography>
            <Grid
                container
                mt={3}
                spacing={6.1}
                direction='row'
                justifyContent='center'
                alignItems='center'
            >
                {videoList.map((item, index) =>
                    index < 3 ? (
                        <Grid key={index}>
                            <VideoCard item={item} index={index} key={index} />
                        </Grid>
                    ) : null
                )}
            </Grid>

            <Button
                sx={{
                    width: "264px",
                    height: "53px",
                    borderRadius: "6px",
                    fontSize: '16px',
                    backgroundColor: WhiteButtons.ButtonColor,
                    color: WhiteButtons.TextColor,
                    ':hover': {
                        backgroundColor: WhiteButtons.onHoverButtonColor,
                        color: WhiteButtons.OnHoverTextColor,
                        border: '0',
                    },
                    border: '0',
                    textAlign: 'center',
                    margin: '132px auto auto auto',
                }}
                variant='outlined'
                href="/resources"
            >
                Back to Resources
            </Button>
        </Stack>
    );
};

const sx = {
    VideosToWatch: css`
        position: relative;
        background-color: #4a7199;
        width: 1461px;
        height: 874px;
    `,
};
