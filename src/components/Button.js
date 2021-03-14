import styled, { css } from "styled-components";
import { grid, flexbox, space, layout, color } from "styled-system";

const Button = styled.button`
  outline: 0;
  padding: 12px 28px;
  border: none;
  color: var(--primary-color);
  font-weight: var(--bold-weight);
  background: var(--secondary-color);
  cursor: pointer;
  box-shadow: -10px -10px 20px #ffffff, 5px 5px 10px #afd1d1;
  border-radius: 8px;
  font-weight: var(--bold-weight);
  font-size: 28px;
  line-height: 45px;
  font-family: var(--primary-font);
  display: flex;
  align-items: center;
  transition: all 0.2s ease-in-out;

  :hover,
  :active {
    box-shadow: -10px -10px 20px #ffffff, 5px 5px 10px #afd1d1,
      inset 5px 5px 10px rgba(175, 209, 209, 0.4),
      inset -10px -10px 20px #ffffff;
  }

  ${({ size }) =>
    size === "small" &&
    css`
      padding: 8px 24px;
      box-shadow: -10px -10px 20px #ffffff, 2px 2px 4px #afd1d1;
    `}

  ${({ color }) =>
    color === "secondary" &&
    css`
      background: #ffffff;
      box-shadow: -5px -5px 10px #effbfb, 5px 5px 10px #b6dada;
    `}

  ${layout} 
  ${space} 
  ${color} 
  ${grid} 
  ${flexbox}
`;

export default Button;
