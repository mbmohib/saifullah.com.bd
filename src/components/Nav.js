import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { Button } from "../components";

const Menu = styled.nav`
  display: flex;
`;

const MenuItem = styled(Link)`
  padding: 16px 24px;
`;

export default function Nav() {
  return (
    <>
      <Menu>
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/">Contact Us</MenuItem>
      </Menu>

      <Button>EN</Button>
    </>
  );
}
