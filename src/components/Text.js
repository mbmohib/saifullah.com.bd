import styled, { css } from "styled-components";

const Text = styled.p`
  ${({ variant }) =>
    variant === "heading1" &&
    css`
      font-size: 56px;
      font-weight: var(--semi-bold-weight);
    `}

  ${({ variant }) =>
    variant === "heading2" &&
    css`
      font-size: 48px;
      font-weight: var(--bold-weight);
    `}

  ${({ variant }) =>
    variant === "heading3" &&
    css`
      font-size: 36px;
      font-weight: var(--semi-bold-weight);
    `}

  ${({ variant }) =>
    variant === "heading4" &&
    css`
      font-size: 28px;
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
      font-size: 18px;
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
`;

Text.defaultProps = {
  variant: "paragraph1"
};

export default Text;
