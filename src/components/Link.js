import styled from "styled-components";
import { Link } from "gatsby";
import { space } from "styled-system";

const LinkExtended = styled(Link)`
  display: flex;
  align-items: center;

  ${space}
`;

export default LinkExtended;
