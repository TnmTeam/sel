import { css } from '@emotion/react';
import { Stack } from '@mui/system';
import { Box } from '@mui/system';

//import dynamic from 'next/dynamic'
//const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export const SelfSplineChartScore = () => {
    return (
        <Stack css={sx.mainContainer}>
            <Box css={sx.itemContainer} flexDirection={'row'}>
                <div css={sx.comingSoon}>Coming Soon</div>
                <Box css={sx.itemWrapper}>
                    {/*
                    <ApexChart css={sx.apexChart}
                        type={"line"}
                        width={"100%"}
                        height={"90%"}
                        options={
                            {
                                chart: {
                                    id: "chart-test",
                                    toolbar: {
                                        show: false
                                    },
                                    zoom: {
                                        enabled: false
                                    },
                                    animations: {
                                        enabled: false
                                    },
                                    fontFamily: "DM Sans"
                                },
                                title: {
                                    text: "Self Scores Overtime",
                                    margin: 20,
                                    offsetX: 0,
                                    offsetY: 0,
                                    floating: false,
                                    style: {
                                        fontSize: '30px',
                                        fontWeight: 'bold',
                                        fontFamily: 'DM Sans',
                                        color: '#253858',
                                    },
                                },
                                stroke: {
                                    show: true,
                                    curve: 'smooth',
                                    lineCap: 'round',
                                    colors: undefined,
                                    width: 3,
                                    // dashArray: 0,      
                                },
                                colors: ['#E7C072', '#D32167', '#1579D3'],
                                xaxis: {
                                    categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
                                },
                                yaxis: {
                                    decimalsInFloat: 0
                                },
                                dataLabels: {
                                    enabled: false,
                                },
                                tooltip: {
                                    enabled: true
                                },
                                grid: {
                                    show: true,
                                    xaxis: {
                                        lines: {
                                            show: false
                                        }
                                    },
                                    yaxis: {
                                        lines: {
                                            show: false
                                        }
                                    },
                                },
                                legend: {
                                    show: false
                                }
                            }
                        }
                        series={
                            [
                                {
                                    name: "test1",
                                    data: [0.9, 1.6, 2.4, 2.1, 2, 1.9, 1.5, 1.3, 1.2, 0.9]
                                },
                                {
                                    name: "test2",
                                    data: [0.9, 1.6, 2.8, 3, 4.7, 4.5, 3, 2, 1.5, 0.9]
                                },
                                {
                                    name: "test3",
                                    data: [0.9, 2.3, 4, 3.8, 3, 2.9, 2.2, 1.8, 1.3, 0.9]
                                }
                            ]
                        }
                    />
                    */}
                    <h1 css={sx.lessons}>Lessons</h1>
                </Box>
            </Box>
        </Stack>
    );
};

const sx = {
    mainContainer: css`
        position: relative;
        height: 632px;
        padding-left: 59px;
        padding-right: 59px;
        background-color: #4a7199;
        margin-top: 40px;
    `,
    itemContainer: css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: center;
    `,
    itemWrapper: css`
        width: 1340px;
        height: 632px;
        background-color: #ffffff;
        border-radius: 10px;
        /*
        line-height: 632px;
        display: flex;
        flex-direction: column;
        font-size: 50pt;
        */
        padding: 40px;
    `,
    apexChart: css``,
    lessons: css`
        margin-top: 30px;
        /*
        position: absolute;
        width: 82.05px;
        */
        height: 16px;
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 16px;
        text-align: center;
        letter-spacing: 1.5px;
        text-transform: capitalize;
        color: #000000;
    `,
    comingSoon: css`
        background: rgba(0, 0, 0, 0.7);
        font-size: 100px;
        color: white;
        position: absolute;
        width: 1322px;
        line-height: 632px;
        border-radius: 10px;
        z-index: 999;
        text-align: center;
    `,
};
