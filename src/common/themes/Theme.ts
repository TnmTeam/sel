import { createTheme } from "@mui/material/styles";
import { palette } from "./Color";
import { typographyOptions } from "./Typography";

// MUI에 적용될 테마를 정의 합니다.
export const theme = createTheme({
  // 컬러 팔레트
  palette: palette,

  // 폰트 스타일
  typography: typographyOptions,

  // 컴포넌트 둥글기
  shape: { borderRadius: 4 },

  // MUI 컴포넌트 Overriding
  components: {},
});
