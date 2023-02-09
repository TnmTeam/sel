import { css } from "@emotion/react";

export const MessageContent = () => {
  return (
    <div css={sx.root}>
      <div css={sx.msgWrap}>
        <div css={sx.whiteBox}>
          <p css={sx.gray}>
            <span css={sx.operator}>Operator</span> from Impacter Pathway
          </p>
          <p>Hi there 👋</p>
          <p>What brings you here today?</p>
        </div>
        <p css={sx.msg}>{"I'm new and want to learn about your courses."}</p>
        <p css={sx.msg}>{"I’m a current customer with a question."}</p>
        <p css={sx.msg}>Just browsing!</p>
      </div>
    </div>
  );
};

const sx = {
  gray: css`
    color: #686868;
  `,
  operator: css`
    color: #686868;
    font-weight: 700;
  `,
  whiteBox: css`
    width: 295px;
    height: 108px;
    padding: 20px;
    font-size: 13px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 20px;
    box-shadow: 0px 2px 8px rgba(35, 47, 53, 0.09);
    border-radius: 6px;
  `,
  msgWrap: css`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 0 38px 17px 0;
  `,
  msg: css`
    font-size: 14px;
    color: #253858;
    background: rgba(98, 147, 198, 0.13);
    border-radius: 6px;
    margin-bottom: 10px;
    line-height: 38px;
    padding: 0 10px;

    width: fit-content;
  `,
  root: css`
    width: 100%;
    height: 558px;
    border-bottom: 1px solid rgba(216, 216, 216, 0.69);
  `,
};
