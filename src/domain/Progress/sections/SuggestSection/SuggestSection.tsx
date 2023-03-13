import { Button, Stack, Typography } from '@mui/material';
import { css } from '@emotion/react';
import { Colors, WhiteButtons } from '@/common/themes/Color';
import { SuggestCard } from './SuggestCard';
import { SuggestStateType } from '../../types/suggest.type';
import { CustomProgress } from '@/common/components/progress';

type DataType = {
    data: SuggestStateType;
};

export const SuggestSection = ({ data }: DataType) => {
    if (!data.result || data.isLoading) {
        return (
            <Stack css={sx.root} justifyContent='center' alignItems='center'>
                <CustomProgress />
            </Stack>
        );
    }

    return (
        <Stack css={sx.root}>
            <Typography variant='h5' color='white' mb='32px'>
                Suggested Courses
            </Typography>
            <div css={sx.cardContainer}>
                {data.result.map((it, index) => (
                    <SuggestCard
                        key={index}
                        image={it.courseThumbnail}
                        title={it.courseTitle}
                        desc={
                            it.courseDescription.length > 400
                                ? it.courseDescription.substring(0, 400) +
                                  '......'
                                : it.courseDescription
                        }
                        onClick={() => null}
                    />
                ))}
            </div>
            <ViewButton />
        </Stack>
    );
};

const sx = {
    root: css`
        background: ${Colors.MedBlue};
        padding: 43px 65px 58px 65px;
    `,
    cardContainer: css`
        display: flex;
        justify-content: space-between;
    `,
    btnWrap: css`
        margin-top: 42px;
        width: 100%;
        justify-content: center;
        display: flex;
    `,
    viewBtn: css`
        font-size: 15pt;
        line-height: 51px;
        text-transform: none;
    `,
};

const ViewButton = () => (
    <div css={sx.btnWrap}>
        <Button
            sx={{
                fontSize: '16pt',
                backgroundColor: WhiteButtons.ButtonColor,
                color: WhiteButtons.TextColor,
                textDecoration: 'none',
                width: '264px',
                ':hover': {
                    backgroundColor: WhiteButtons.onHoverButtonColor,
                    color: WhiteButtons.OnHoverTextColor,
                    border: '0',
                },
                border: '0',
                textAlign: 'center',
                margin: '50px auto auto auto',
            }}
            onClick={() =>
                window.open('https://www.impacterpathway.com/', '_black')
            }
            css={sx.viewBtn}
        >
            View all
        </Button>
    </div>
);
