import { TypographyOptions } from "@mui/material/styles/createTypography";

const baseTypographyOptions: TypographyOptions = {
  fontFamily: "Pretendard",
  h1: {
    fontSize: "150px",
  },
  h2: {
    fontSize: "80px",
  },
  h3: {
    fontSize: "60px",
  },
  h4: {
    fontSize: "50px",
  },

  h5: {
    fontSize: "44px",
  },
  h6: {
    fontSize: "35px",
  },

  subtitle1: {
    fontSize: "40px",
  },
  subtitle2: {
    fontSize: "30px",
  },
  body2: {
    fontSize: "20px",
  },

  caption: {
    fontSize: "24px",
  },
};

export const typographyOptions: TypographyOptions = {
  ...baseTypographyOptions,
};
