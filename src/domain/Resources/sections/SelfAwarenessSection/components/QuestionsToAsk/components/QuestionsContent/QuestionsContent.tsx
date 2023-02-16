import { css } from '@emotion/react';
import { Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { QuestionsContentType } from './types/QuestionsContentType.type';
import { QuestionsTimeline } from './QuestionsTimeline';
import Image from 'next/image';
import QuestionsContentBgImage from '@/assets/resources/img-questionsContentBgImage.png';

export const QuestionsContent = ({ text1, text2, text3, text4, text5, title, plain, title2, title2Sub1, title2Sub2 }: QuestionsContentType) => {
    return (
        <Stack css={sx.mainContainer}>
            <Box css={sx.itemContainer} flexDirection={'row'}>
                <Box css={sx.itemWrapper}>
                    <QuestionsContentImage/>
                    <Stack css={sx.progressWrapper}>
                        <Stack direction="row"
                            sx={{ 
                                height: '100%',
                                display: 'flex', 
                                alignItems: 'end', }}
                        >
                            <Typography css={sx.progressItem} ></Typography>
                            <Typography css={sx.progressItem} >{text1}</Typography>
                            <Typography css={sx.progressItem} ></Typography>
                        </Stack>
                    </Stack>
                    <Stack css={sx.progressWrapper}>
                        <Stack direction="row"
                            sx={{ 
                                height: '100%',
                                display: 'flex', 
                                alignItems: 'center', }}
                        >
                            <Typography css={sx.progressItem1} >{text2}</Typography>
                            <Typography css={sx.progressItem2} >{text3}</Typography>
                            <Typography css={sx.progressItem3} >{text4}</Typography>
                        </Stack>
                    </Stack>
                    <Stack css={sx.progressWrapper}>
                        <Stack direction="row" justifyContent='center' >
                            <Typography css={sx.progressItem} ></Typography>
                            <Typography css={sx.progressItem} >{text5}</Typography>
                            <Typography css={sx.progressItem} ></Typography>
                        </Stack>
                    </Stack>
                </Box>
                <Box css={sx.itemWrapper}>
                    <Stack css={sx.questionsContainer}>
                        <Stack>
                            <Typography
                                variant='h5'
                                mt={'15px'}
                                ml={'15px'}
                                mb={'15px'}
                                letterSpacing='0.3px'
                                css={sx.titleText}
                            >
                                {title}
                            </Typography>
                        </Stack>
                        {plain.map((it, index) => (
                            <QuestionsTimeline
                                key={index}
                                questions={it.questions}
                                answer={it.answer}
                            />
                        ))}
                        <Stack>
                        <Typography
                                variant='h5'
                                mt={'15px'}
                                ml={'15px'}
                                mb={'15px'}
                                letterSpacing='0.3px'
                                css={sx.titleText}
                            >
                                {title2}
                            </Typography>
                            <Typography
                                ml={'15px'}
                                mb={'10px'}
                                css={sx.subText}
                            >{title2Sub1}</Typography>
                            <Typography
                                ml={'15px'}
                                mb={'10px'}
                                css={sx.subText}
                            >{title2Sub2}</Typography>
                        </Stack>
                    </Stack>
                </Box>
            </Box>
        </Stack>
    );
};

const sx = {
    mainContainer: css`
        position: relative;
        height: 480px;
        padding-left: 10px;
        padding-right: 10px;
    `,
    itemContainer: css`
        height: 100%;
        position: relative;
        display: flex;
        justify-content: space-between;
        text-align: center;
    `,
    itemWrapper: css`
        width: 96%;
        height: 98%;
        position: relative;
        display: flex;
        alignItems: center;
        border-radius: 10px;
        flex-direction: column;
    `,
    questionsImage: css`
        width: 98%;
        height: 98%;
        position: absolute;
        top: 0%;
        left: 0%;
        z-index: 0;
    `,
    questionsImageSub: css`
        width: 98%;
        height: 98%;
    `,
    questionsContainer: css`
        width: 90%;
        height: 100%;
        margin-top: 10px;
        margin-left: 10px;
    `,
    titleText: css`
        font-weight: bold;
        text-align: left;
    `,
    subText: css`
        text-align: left;
    `,
    progressWrapper: css`
        width: 80%;
        height: 100%;
        margin-left: 8%;
        margin-bottom: 4%;
        position: relative;
    `,
    progressItem: css`
        width: 30%;
        margin-left: 6%;
        margin-right: 4%;
        text-align: center;
        font-weight: bold;
        font-size: 8pt;
        line-height: 18px;
    `,
    progressItem1: css`
        width: 20%;
        margin-left: 16%;
        margin-right: 4%;
        text-align: center;
        font-weight: bold;
        font-size: 8pt;
        line-height: 18px;
    `,
    progressItem2: css`
        width: 30%;
        margin-left: 6%;
        margin-right: 4%;
        text-align: center;
        font-weight: bold;
        font-size: 26pt;
        line-height: 26px;
    `,
    progressItem3: css`
        width: 20%;
        margin-left: 6%;
        margin-right: 14%;
        text-align: center;
        font-weight: bold;
        font-size: 8pt;
        line-height: 18px;
    `,
};

const QuestionsContentImage = () => (
    <Stack css={sx.questionsImage}
        sx={{
        width: '100%',
        height: '100%',
        alignItems: 'center', }}
    >
        <Image objectFit='cover' css={sx.questionsImageSub} src={QuestionsContentBgImage} alt={'img'} />
    </Stack>
);
