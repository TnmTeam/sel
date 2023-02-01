import { TypographyOptions } from "@mui/material/styles/createTypography";

const baseTypographyOptions: TypographyOptions = {
  fontFamily: "Pretendard",
  h1: {
    fontSize: "60px",
    lineHeight: "68px",
    fontWeight: "bold",
  },
  h2: {
    fontSize: "40px",
    lineHeight: "48px",
    fontWeight: "bold",
  },
  h3: {
    fontSize: "35px",
    lineHeight: "43px",
    fontWeight: "bold",
  },
  h4: {
    fontSize: "30px",
    lineHeight: "38px",
    fontWeight: "bold",
  },

  h5: {
    fontSize: "25px",
    lineHeight: "33px",
    fontWeight: "normal",
  },

  body1: { fontSize: "18px", lineHeight: "26px", fontWeight: "normal" },
  body2: { fontSize: "16px", lineHeight: "24px", fontWeight: "normal" },

  caption: { fontSize: "14px", lineHeight: "22px", fontWeight: "normal" },
};

export const typographyOptions: TypographyOptions = {
  ...baseTypographyOptions,
};
