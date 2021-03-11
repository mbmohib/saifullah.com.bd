import styled from "styled-components";
import { space } from "styled-system";
import { mediaQuery } from "../styles";

const Container = styled.div`
  margin: 0 auto;
  padding-left: 16px;
  padding-right: 16px;

  ${mediaQuery.md`
    max-width: 1280px;
  `}

  ${space}
`;

export default Container;
