import styled from "styled-components";
import { flexbox, size, space, layout, typography } from "styled-system";

const Flex = styled.div`
  display: flex;

  ${flexbox}
  ${typography}
  ${size}
  ${space}
  ${layout}
`;

export default Flex;
