import styled from "styled-components";
import {
  grid,
  flexbox,
  space,
  border,
  layout,
  color,
  position
} from "styled-system";

const Box = styled.div`
  ${layout}
  ${space}
  ${border}
  ${color}
  ${grid}
  ${flexbox}
  ${position}
`;

export default Box;
