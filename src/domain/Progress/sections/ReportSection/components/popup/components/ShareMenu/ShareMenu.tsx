import { Menu, MenuItem, Typography } from "@mui/material";
import { css } from "@emotion/react";
import Image from "next/image";
import MailIcon from "@/assets/progress/popup/ic-mail.svg";
import FaceIcon from "@/assets/progress/popup/ic-face.svg";
import InstaIcon from "@/assets/progress/popup/ic-insta.svg";
import { Colors } from "@/common/themes/Color";
import { ShareItemType, ShareMenuType } from "./item.type";

export const ShareMenu = ({ anchorEl, open, onClose }: ShareMenuType) => {
  const models: ShareItemType[] = [
    {
      icon: MailIcon,
      sns: "Email",
      href: "#",
    },
    { icon: FaceIcon, sns: "Facebook", href: "#" },
    { icon: InstaIcon, sns: "Instagram", href: "#" },
  ];

  return (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      css={sx.menu}
    >
      {models.map((it) => (
        <ShareMenuItem
          key={it.sns}
          icon={it.icon}
          sns={it.sns}
          href={it.href}
        />
      ))}
    </Menu>
  );
};

const sx = {
  menu: css`
    & .MuiPaper-root {
      box-shadow: 2px 2px 24px rgba(0, 0, 0, 0.12);
      border-radius: 10px;
    }
    ul {
      width: 187px;
      height: 152px;
      background-color: white;
      display: flex;
      flex-direction: column;
      padding: 0;
    }

    li {
      width: 100%;
      flex: 1;
      display: flex;
      align-items: center;
      gap: 10px;
      padding-left: 39px;
      min-height: none;
      border-bottom: 1px solid rgba(0, 0, 0, 0.08);

      &:nth-last-child(1) {
        border-bottom: none;
      }
      &:hover {
        background-color: white;
        .icon {
          background-color: ${Colors.ActiveBlue};
        }
        .sns {
          color: ${Colors.ActiveBlue};
        }
      }
    }
  `,
  icon: css`
    width: 28px;
    height: 26px;
    background-color: rgba(151, 151, 151, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
  `,
};

const ShareMenuItem = ({ icon, sns, href }: ShareItemType) => {
  return (
    <MenuItem onClick={() => console.log(href)}>
      <div className="icon" css={sx.icon}>
        <Image width={16} height={13} src={icon} alt="icon" />
      </div>
      <Typography className="sns" variant="body2">
        {sns}
      </Typography>
    </MenuItem>
  );
};
