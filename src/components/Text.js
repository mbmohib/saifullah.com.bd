import styled, { css } from "styled-components";
import { space, typography } from "styled-system";
import { mediaQuery } from "../styles";

const Text = styled.p`
  ${({ variant }) =>
    variant === "heading1" &&
    css`
      font-weight: var(--semi-bold-weight);
      font-size: 36px;

      ${mediaQuery.md`
        font-size: 56px;
      `}
    `}

  ${({ variant }) =>
    variant === "heading2" &&
    css`
      font-size: 28px;
      font-weight: var(--bold-weight);

      ${mediaQuery.md`
        font-size: 36px;
      `}
    `}

  ${({ variant }) =>
    variant === "heading3" &&
    css`
      font-size: 24px;
      font-weight: var(--semi-bold-weight);
      line-height: 1.3;

      ${mediaQuery.md`
        font-size: 28px;
      `}
    `}

  ${({ variant }) =>
    variant === "heading4" &&
    css`
      font-size: 24px;
      font-weight: var(--semi-bold-weight);

      ${mediaQuery.md`
        font-size: 24px;
      `}
    `}

  ${({ variant }) =>
    variant === "heading5" &&
    css`
      font-size: 24px;
      font-weight: var(--semi-bold-weight);
    `}

  ${({ variant }) =>
    variant === "paragraph1" &&
    css`
      font-size: 18px;
      font-weight: var(--normal-weight);
    `}

  ${({ variant }) =>
    variant === "subtitle" &&
    css`
      font-size: 14px;
    `}
    

  ${({ color }) =>
    color === "primary" &&
    css`
      color: var(--primary-color);
    `}

  ${({ color }) =>
    color === "primary" &&
    css`
      color: var(--primary-color);
    `}

  ${({ color }) =>
    color === "light" &&
    css`
      color: var(--text-color-light);
    `}

  ${({ underline }) =>
    underline &&
    css`
      text-decoration: underline;
      text-underline-position: under;
    `}

    ${space}
    ${typography}
`;

Text.defaultProps = {
  variant: "paragraph1"
};

export default Text;
