import styled from "styled-components";
import { grid, flexbox, space, layout, color } from "styled-system";

const Button = styled.button`
  outline: 0;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  color: var(--primary-color);
  font-weight: var(--bold-weight);
  background: #effbfb;
  box-shadow: -10px -10px 20px #ffffff, 2px 2px 4px #afd1d1;
  cursor: pointer;
  /* box-shadow: -10px -10px 20px #ffffff, 5px 5px 10px #afd1d1; */

  ${layout}
  ${space}
  ${color}
  ${grid}
  ${flexbox}
`;

export default Button;
