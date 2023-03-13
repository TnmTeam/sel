import { Stack, Typography } from '@mui/material';
import { css } from '@emotion/react';
import Image from 'next/image';
import report from '@/assets/progress/report/report.png';
import { useEffect, useState } from 'react';
import { ProgressReportskType } from '../../../types/report.type';
import { CustomProgress } from '@/common/components/progress';
import Button from '@mui/material/Button';



type DataType = {
    data: ProgressReportskType;
};

export const ProgressReports = ({ data }: DataType) => {
    
    const [position, setPosition] = useState(1);
    const [url, setUrl] = useState("");
    const [prevBtnFlag, setPrevBtnFlag] = useState(false);
    const [nextBtnFlag, setNextBtnFlag] = useState(false);

    const endPage = data.result?.popupList.length;

    const prevBtnEvent = () => {
        if(position > 1)
        {
          setUrl(data.result.popupList[position-2]); // -1 -1
          setPosition((position) => position - 1);
        }
    }
    const nextBtnEvent = () => {
        if(position < endPage)
        {
          setUrl(data.result.popupList[position]);  // +1 -1
          setPosition((position) => position + 1);
        }
    }


    useEffect(() => {
        if(endPage > 0)
        {
            setPosition(1);
            setUrl(data.result.popupList[0]);
        }
        else
        {
            setPosition(0);
            setUrl("");
        } 
    }, [endPage]);

    useEffect(() => {
        if (endPage <= 1)
        {
            setPrevBtnFlag(true);
            setNextBtnFlag(true);
        }
        else
        {
            if (position == 1)
            {
                setPrevBtnFlag(true);
                setNextBtnFlag(false);
            }
            else if (position == endPage)
            {
                setPrevBtnFlag(false);
                setNextBtnFlag(true);
            }
            else
            {
                setPrevBtnFlag(false);
                setNextBtnFlag(false);
            }
        }
    }, [position]);


    return (
        <Stack css={sx.root}>
            <Typography css={sx.title}>Progress Reports</Typography>

            {!data.result || data.isLoading ? (
                <Stack
                    height={'452px'}
                    justifyContent='center'
                    alignItems={'center'}
                >
                    <CustomProgress />
                </Stack>
            ) : (
                <>
                    <div css={sx.imageContainer}>
                    {
                        url ? 
                            <iframe src={url} width={610}></iframe>
                        : 
                            <Stack
                                style={{
                                    fontFamily: "DM Sans",
                                    fontWeight: "400",
                                    fontSize: "20px",
                                    width: "100%",
                                    textAlign: "center",
                                    paddingTop: "50%",
                                }}
                            >
                                No Repoert
                            </Stack>
                    }
                    </div>

                    <div css={sx.navigatorDiv}>
                        <Button
                        variant="contained" 
                        color="inherit"
                        onClick={prevBtnEvent}
                        disabled={prevBtnFlag}
                        >
                            {'<'}
                        </Button>

                        <Button
                            style={{width:"100px", cursor:"default"}}
                        >
                            {position} / {endPage} 
                        </Button>

                        <Button
                        variant="contained" 
                        color="inherit"
                        onClick={nextBtnEvent}
                        disabled={nextBtnFlag}
                        >
                            {'>'}
                        </Button>

                    </div>
                </>
            )}
        </Stack>
    );
};

const sx = {
    root: css`
        margin-bottom: 60px;
    `,
    title: css`
        font-weight: 700;
        font-size: 24px;
        line-height: 31px;
        color: #0a0b26;
        margin-bottom: 31px;
    `,
    imageContainer: css`
        display: flex;
        background-color: #efefef;
        width: 610px;
        height: 790px;
    `,
    image: css`
        cursor: pointer;
    `,
    number: css`
        position: flex;
        text-align: center;
        background-color : rgba(103, 135, 183, 0.8);      
        width: 168px;
        radius: 4px;
        font-size: 12pt;
        line-height: 17px;        
        color: white;
    `,
    navigatorDiv: css`
        display: flex;
        width: 590px;
        height: 25px;
        padding-left: 180px;
        margin-top: 20px;
  `,

};

