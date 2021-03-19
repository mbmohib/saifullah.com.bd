import styled, { css } from 'styled-components';
import { mediaQuery } from '../styles';

const Button = styled.button`
  outline: 0;
  border: none;
  color: var(--primary-color);
  font-weight: var(--bold-weight);
  background: var(--secondary-color);
  cursor: pointer;
  box-shadow: -10px -10px 20px #ffffff, 5px 5px 10px #afd1d1;
  border-radius: 8px;
  font-weight: var(--semi-bold-weight);
  font-family: var(--primary-font);
  display: flex;
  align-items: center;
  transition: all 0.2s ease-in-out;
  padding: 8px 16px;
  font-size: 18px;
  line-height: 1.5;

  ${mediaQuery.md`
    padding: 8px 24px;
    font-size: 24px;
    line-height: 1.6;
  `}

  :hover,
  :active {
    box-shadow: -10px -10px 20px #ffffff, 5px 5px 10px #afd1d1,
      inset 5px 5px 10px rgba(175, 209, 209, 0.4),
      inset -10px -10px 20px #ffffff;
  }

  ${({ size }) =>
    size === 'small' &&
    css`
      box-shadow: -10px -10px 20px #ffffff, 2px 2px 4px #afd1d1;
      font-size: 20px;
    `}

  ${({ color }) =>
    color === 'secondary' &&
    css`
      background: #ffffff;
      box-shadow: -5px -5px 10px #effbfb, 5px 5px 10px #b6dada;
    `}
`;

export default Button;
