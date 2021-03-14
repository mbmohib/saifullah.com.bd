import styled from "styled-components";
import { grid, size, space, layout, typography } from "styled-system";

const Grid = styled.div`
  display: grid;

  ${grid}
  ${typography}
  ${size}
  ${space}
  ${layout}
`;

export default Grid;
