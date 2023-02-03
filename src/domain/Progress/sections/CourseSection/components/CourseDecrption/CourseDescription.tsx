import { Stack, Typography } from "@mui/material";

export const CourseDescription = () => {
  const models = {
    title: "Course Description",
    description:
      "Explore research-based practices in leadership, self-efficacy, and other non-cognitive areas of study that help young people develop\nthe skills requisite for achieving high-impact outcomes.\n\nGrow your empathy and gain the perspective of walking in the shoes of others as you survey the community around you for any areas of need.\nDevelop the impact of others with intention.",
  };

  return (
    <Stack paddingX={"36px"}>
      <Typography
        variant="h4"
        color="#1B2137"
        letterSpacing={"0.3px"}
        mb="30px"
      >
        {models.title}
      </Typography>
      <Typography
        variant="body1"
        lineHeight="23px"
        color="#4F5B70"
        whiteSpace={"pre-wrap"}
        height="161px"
      >
        {models.description}
      </Typography>
    </Stack>
  );
};
