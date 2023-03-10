import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import { css } from "@emotion/react";
import NextIcon from "@/assets/progress/icon/ic-next.svg";
import DownIcon from "@/assets/progress/icon/ic-down.svg";
import { ColoredProcess } from "./ColoredProcess";
import { CourseType } from "@/domain/Progress/types/course.type";

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
      <ColoredProcess processNumber={item.progressPercent} />
      <Typography
        variant="body2"
        width="240px"
        paddingLeft={"10px"}
        css={sx.text}
      >
        {item.section_title}
      </Typography>
      <Stack direction="row" alignItems={"center"}>
        <Typography variant="caption" paddingLeft={"50px"} width="73px" css={sx.text}>
          {item.unit_item_cnt}
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

    &:nth-last-of-type(1) {
      border-bottom: none;
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
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
};

const getDate = (date: number) => {
  const formattedDate = new Date(date).toString().split(" ");
  const month = formattedDate[1];
  const day = formattedDate[2];
  return `${month} ${day}`;
};
