import styled from "styled-components";
import { flexbox, size, space, layout } from "styled-system";

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  ${flexbox}
  ${size}
  ${space}
  ${layout}
`;

export default Flex;
