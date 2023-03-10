import { css } from "@emotion/react";
import { Stack, Typography } from "@mui/material";
import { useRecoilValue } from 'recoil';
import { courseMapState, studentMapState } from "@/common/atom/Atom";
import { useEffect, useState } from "react";

export const JourneyTitle = () => {
  const currenStudentMap:any = useRecoilValue(studentMapState);

  const [studentName , setStudentName]= useState("");
  useEffect(()=> {
    setStudentName(currenStudentMap.name);
  },[ currenStudentMap])
  
  const models = {
    name: studentName,
  };
  
  return (
    <Stack spacing="10px" css={sx.title}>
      <Typography
        variant="h3"
        fontSize={'30px'}
        lineHeight="46px"
        color=" #0A0B26"
        letterSpacing={"0.02em"}
      >
        {"Student Success Journey"}
      </Typography>
      <Typography
        variant="h2"
        fontSize={'40px'}
        lineHeight="52px"
        color=" #0A0B26"
        letterSpacing={"0.02em"}
      >{`${models.name}’s Journey`}</Typography>
    </Stack>
  );
};

const sx = {
  title: css`
    position: absolute;
    top: 57px;
    left: 88px;
  `,
};
