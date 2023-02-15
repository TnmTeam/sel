import { useState } from "react";

export const useButtonContainerHook = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return {
    shareBtnState: {
      open: open,
      anchorEl: anchorEl,
      onClick: handleClick,
      onClose: handleClose,
    },
  };
};
