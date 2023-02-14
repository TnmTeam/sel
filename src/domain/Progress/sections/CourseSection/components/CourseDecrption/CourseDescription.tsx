import { Stack, Typography } from "@mui/material";

type CourseDescriptionType = {
  description: string;
};

export const CourseDescription = ({ description }: CourseDescriptionType) => {
  return (
    <Stack paddingX={"36px"}>
      <Typography
        variant="h4"
        color="#1B2137"
        letterSpacing={"0.3px"}
        mb="30px"
      >
        {"Course Description"}
      </Typography>
      <Typography
        variant="body1"
        lineHeight="23px"
        color="#4F5B70"
        whiteSpace={"pre-wrap"}
        height="161px"
      >
        {description}
      </Typography>
    </Stack>
  );
};
