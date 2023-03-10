import { Colors } from "@/common/themes/Color";
import { css } from "@emotion/react";
import { Button, Stack } from "@mui/material";
import { ShareMenu } from "../ShareMenu";
import { useButtonContainerHook } from "./useButtonContainerHook";

type ButtonContainerType = {
  saveBtnClick: () => void;
};

export const ButtonContainer = ({ saveBtnClick }: ButtonContainerType) => {
  const { shareBtnState } = useButtonContainerHook();

  return <></>;
  /*
  return (    
    <Stack direction="row" justifyContent={"center"} spacing="26px">      
      <Button onClick={saveBtnClick} css={sx.saveBtn}>
        {"Save"}
      </Button>
      <div>
        <Button
          aria-controls={shareBtnState.open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={shareBtnState.open ? "true" : undefined}
          onClick={shareBtnState.onClick}
          css={sx.shareBtn}
        >
          {"Share"}
        </Button>
        <ShareMenu
          open={shareBtnState.open}
          anchorEl={shareBtnState.anchorEl}
          onClose={shareBtnState.onClose}
        />
      </div>
    </Stack>    
  );
  */
};

const sx = {
  saveBtn: css`
    width: 125px;
    height: 52px;
    background-color: white;
    color: ${Colors.BackBlue};
    border: solid 1px ${Colors.BackBlue};
    border-radius: 8px;
    text-transform: none;
    &:hover {
      background-color: white;
    }
  `,
  shareBtn: css`
    width: 125px;
    height: 52px;
    background-color: rgba(98, 147, 198, 1);
    color: white;
    border-radius: 8px;
    border: none;
    text-transform: none;
    &:hover {
      background-color: rgba(98, 147, 198, 1);
    }
  `,
};
