import { Button, Stack, Typography } from "@mui/material";
import { css } from "@emotion/react";
import { Colors } from "@/common/themes/Color";
import { SuggestCard } from "./SuggestCard";
import { SuggestStateType } from "../../types/suggest.type";
import { CustomProgress } from "@/common/components/progress";

type DataType = {
  data: SuggestStateType;
};

export const SuggestSection = ({ data }: DataType) => {
  if (!data.result || data.isLoading) {
    return (
      <Stack css={sx.root} justifyContent="center" alignItems="center">
        <CustomProgress />
      </Stack>
    );
  }

  return (
    <Stack css={sx.root}>
      <Typography variant="h5" color="white" mb="32px">
        Suggested Courses
      </Typography>
      <div css={sx.cardContainer}>
        {data.result.map((it, index) => (
          <SuggestCard
            key={index}
            image={it.image}
            title={it.title}
            desc={it.desc}
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
    background: ${Colors.BottomBlue};
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
    width: 264px;
    height: 58px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #6394c7;
    background-color: #fff;
    border: none;
    text-transform: none;

    &:hover {
      background-color: #fff;
    }
  `,
};

const ViewButton = () => (
  <div css={sx.btnWrap}>
    <Button onClick={() => null} css={sx.viewBtn}>
      Veiw all
    </Button>
  </div>
);
