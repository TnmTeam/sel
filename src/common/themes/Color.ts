import { PaletteOptions } from "@mui/material";

export enum Colors {
  // primary
  FlexBlack = "#3D3935",
  FlexRed = "#FF585D",
  FlexGrey = "#F1F1F1",
  FlexBlue = "#F7F9FD",
  BackBlue = "#6787B7",
  MedBlue = "#4A7199",
  BottomBlue = "#617391",

  // secondary
  ActiveBlue = "#147AD6",
  LateRed = "#EA4848",
  CompeleteGreen = "#7ACB5E",
  MiddleCompeleteYellow = "#EEB035",

  // text
  Text800 = "#282C36",
  Text600 = "#4E5668",
  Text400 = "#98A0B3",
  Text200 = "#C3CAD9",
  Text100 = "#F2F6FF",
  BasicText = "#4F5B70",

  // process color
  UnCompeleteYellow = "#F1AB27",
}
// Flex Blue Buttons
export enum FlexBlueButtons {
  TextColor = "#FFFFFF",
  ButtonColor = "#6787B7",
  OnHoverTextColor = "#FFFFFF",
  onHoverButtonColor = "#4E5668",
}

// White Buttons
export enum WhiteButtons {
  TextColor = "#6787B7",
  ButtonColor = "#FFFFFF",
  OnHoverTextColor = "#FFFFFF",
  onHoverButtonColor = "#4E5668",
}

// Radial Buttons
export enum RadialButtons {
  TextColor = "#6787B7",
  ButtonColor = "#6787B7",

  OnHoverTextColor = "#6787B7",
  OnHoverStrokeColor = "#EFF6FF",

  SelectedTextColor = "#EFF6FF",
  SelectedCircleColor = "#6787B7",
}

// Text Links
export enum TextLinks {
  TextColor = "#6787B7",
}

// Navigation Items
export enum NavigationItems {
  TextColor = "#C6CFE7",
  OnHoverTextColor = "#FFFFFF",
  SelectedTextColor = "#FFFFFF",
}

// 테마에 적용될 컬러 팔레트를 정의 합니다.
export const palette: PaletteOptions = {
  primary: {
    main: Colors.FlexBlack,
  },
  secondary: {
    main: Colors.ActiveBlue,
  },
  error: {
    main: Colors.LateRed,
  },
  success: {
    main: Colors.CompeleteGreen,
  },
};
