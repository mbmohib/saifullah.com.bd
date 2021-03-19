import styled, { css } from "styled-components";
import { space } from "styled-system";
import { mediaQuery } from "../styles";

const Container = styled.div`
  margin: 0 auto;
  padding-left: 16px;
  padding-right: 16px;

  ${({ fluid }) =>
    fluid &&
    css`
      padding-left: 24px;
      padding-right: 24px;
    `}

  ${mediaQuery.md`
    max-width: ${({ fluid }) => !fluid && "1280px"}
  `}

  ${space}
`;

export default Container;
