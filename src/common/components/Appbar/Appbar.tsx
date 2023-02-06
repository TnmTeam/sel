import Link from 'next/link';
import { css } from "@emotion/react";
import { Colors } from "@/common/themes/Color";
import { Stack } from "@mui/material";

export const Appbar = () => {
  return (
    <Stack sx={{ height: "89px", backgroundColor: Colors.BackBlue, flexDirection: "row" }}>
      <Link href="/login" css={st.link}>Login</Link>
      <Link href="/overview" css={st.link}>Overview</Link>
      <Link href="/progress" css={st.link}>Progress</Link>
      <Link href="/account" css={st.link}>Account</Link>
    </Stack>
  );
};

const st = {
  link: css`
    display: 'inline-block';
    font-size: 20px;
    margin-right: 20px;
  `
}
