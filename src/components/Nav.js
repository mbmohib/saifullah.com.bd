import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { Button, Flex } from "../components";
import { DownArrowSmall } from "../icons";
import { mediaQuery } from "../styles";

const Menu = styled.nav`
  display: none;

  ${mediaQuery.md`
    display: flex;
  `}
`;

const MenuItem = styled(Link)`
  padding: 16px 24px;
  color: var(--primary-color);
  font-weight: var(--semi-bold-weight);
  font-size: 20px;
`;

export default function Nav() {
  return (
    <Flex>
      <Menu>
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/">Contact Us</MenuItem>
      </Menu>

      <Button size="small">
        EN <DownArrowSmall ml={2} />
      </Button>
    </Flex>
  );
}
