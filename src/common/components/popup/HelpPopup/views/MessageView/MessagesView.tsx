import { Colors } from "@/common/themes/Color";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import { MessageBox, SendMessageBtn } from "./components";

export const MessagesView = () => {
  const models = [
    {
      text: "Hi there! What brings you to Impacter Path Impacter Path",
      author: "Operator",
      date: "4d ago",
    },
  ];
  return (
    <div css={sx.root}>
      <NessageHeader />
      <div css={sx.messageContainer}>
        {models.map((it, index) => (
          <MessageBox
            key={index}
            text={it.text}
            author={it.author}
            date={it.date}
          />
        ))}
      </div>
      <SendMessageBtn onClick={() => null} />
    </div>
  );
};

const sx = {
  root: css`
    width: 400px;
    height: 682.18px;
    border-radius: 16px;
    position: relative;
    font-size: 14px;
    box-shadow: 0px 5px 40px rgba(0, 0, 0, 0.16);
  `,
  header: css`
    background-color: ${Colors.BackBlue};
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  messageContainer: css`
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    ::-webkit-scrollbar {
      display: none;
    }
  `,
};

const NessageHeader = () => {
  return (
    <div css={sx.header}>
      <Typography variant="body1" fontWeight={700} color="white">
        {"Messages"}
      </Typography>
    </div>
  );
};
