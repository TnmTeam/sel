import { IconButton, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { css } from "@emotion/react";
import { useCourseDetailItem } from "./useCourseDetailItem";
import { CourseDetailType } from "@/domain/Progress/types/course.type";

type DetailCourseItemType = {
  item: CourseDetailType;
  onItemClick: () => void;
  isSelected: boolean;
};

export const DetailCourseItem = ({
  item,
  onItemClick,
  isSelected,
}: DetailCourseItemType) => {
  const { getCompletionIcon, getCourseTypeIcon } = useCourseDetailItem();

  return (
    <Stack direction="row" css={sx.courseDetailItem(isSelected)}>
      <Image
        width={20}
        height={30}
        src={getCompletionIcon(item.done)}
        alt="icon"
      />
      <Typography
        variant="body2"
        width="362px"
        lineHeight={"21px"}
        ml={"20px"}
        mr={"20px"}
        css={sx.text}
      >
        {item.title}
      </Typography>
      <IconButton onClick={onItemClick} css={sx.mediaImage}>
        <Image fill src={getCourseTypeIcon(item.type)} alt="media" />
      </IconButton>
    </Stack>
  );
};

const sx = {
  courseDetailItem: (isSelected: boolean) => css`
    width: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 24px;
    padding-right: 17.32px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.11);
    background-color: ${isSelected && " rgba(103, 135, 183, 0.2)"};
    &:nth-last-of-type(1) {
      border-bottom: none;
    }
  `,
  text: css`
    color: #0a0b26;
    font-weight: 500;
    letter-spacing: 0.02em;
  `,
  mediaImage: css`
    position: relative;
    width: 30px;
    height: 30px;
  `,
};
