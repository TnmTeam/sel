import { Colors } from "@/common/themes/Color";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import { css } from "@emotion/react";
import { CourseType } from "../../../../../types/course.type";
import NextIcon from "@/assets/progress/icon/ic-next.svg";
import DownIcon from "@/assets/progress/icon/ic-down.svg";
import { ColoredProcess } from "./ColoredProcess";

type CourseItemType = {
  item: CourseType;
  onItemClick: () => void;
  isSelected?: boolean;
};

export const CourseItem = ({
  item,
  onItemClick,
  isSelected = false,
}: CourseItemType) => {
  return (
    <Stack onClick={onItemClick} direction="row" css={sx.courseItem}>
      <ColoredProcess processNumber={item.process} />
      <Typography variant="body2" width="247px" css={sx.text}>
        {item.dayTitle}
      </Typography>
      <Stack direction="row" alignItems={"center"}>
        <Typography variant="caption" width="73px" css={sx.text}>
          {item.date}
        </Typography>
        <div css={sx.icon}>
          {isSelected ? (
            <Image width={20} height={12} src={DownIcon} alt={"down"} />
          ) : (
            <Image width={12} height={20} src={NextIcon} alt={"next"} />
          )}
        </div>
      </Stack>
    </Stack>
  );
};

const sx = {
  courseItem: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 80px;
    padding-right: 17.32px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.11);
    cursor: pointer;

    &:hover {
      transition: 0.3s;
      background-color: ${Colors.FlexBlue};
    }
  `,
  text: css`
    color: #0a0b26;
    font-weight: 500;
    line-height: 1;
    letter-spacing: 0.02em;
  `,
  icon: css`
    width: 20px;
  `,
};
