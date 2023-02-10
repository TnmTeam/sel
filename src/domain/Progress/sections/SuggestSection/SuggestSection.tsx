import { Button, Stack, Typography } from "@mui/material";
import { css } from "@emotion/react";
import { Colors } from "@/common/themes/Color";
import { SuggestCard } from "./SuggestCard";
export const SuggestSection = () => {
  const models = [
    {
      image: "/assets/progress/banner/img-banner.png",
      title: "THE 7 DAY LEADERSHIP CHALLENGE",
      desc: "In order to impact others, it's essential to first dig deep into one of the most important people in your life: YOU. Before going out and making a difference in the world, impacters must first look within to understand who they are, where they come from, and what their purpose is.",
    },
    {
      image: "/assets/progress/banner/img-banner.png",
      title: "THE 7 DAY LEADERSHIP CHALLENGE",
      desc: "In order to impact others, it's essential to first dig deep into one of the most important people in your life: YOU. Before going out and making a difference in the world, impacters must first look within to understand who they are, where they come from, and what their purpose is.",
    },
    {
      image: "/assets/progress/banner/img-banner.png",
      title: "THE 7 DAY LEADERSHIP CHALLENGE",
      desc: "In order to impact others, it's essential to first dig deep into one of the most important people in your life: YOU. Before going out and making a difference in the world, impacters must first look within to understand who they are, where they come from, and what their purpose is.",
    },
  ];

  return (
    <Stack css={sx.root}>
      <Typography variant="h5" color="white" mb="32px">
        Suggested Courses
      </Typography>
      <div css={sx.cardContainer}>
        {models.map((it, index) => (
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
