import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { Button, Flex } from "../components";

const Menu = styled.nav`
  display: flex;
`;

const MenuItem = styled(Link)`
  padding: 16px 24px;
  color: var(--primary-color);
`;

export default function Nav() {
  return (
    <Flex>
      <Menu>
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/">Contact Us</MenuItem>
      </Menu>

      <Button>EN</Button>
    </Flex>
  );
}
