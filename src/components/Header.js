import React from "react";
import styled from "styled-components";
import logo from "../images/icon.png";
import { Image, Link, Container, Nav, Flex } from "../components";

const HeaderWrapper = styled.div`
  background: linear-gradient(360deg, #effbfb 0%, #ffffff 100%);
  position: absolute;
  width: 100%;
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <Container>
        <Flex height="100px" justifyContent="space-between">
          <Link to="/">
            <Image width="50" src={logo} alt="" />
          </Link>
          <Nav />
        </Flex>
      </Container>
    </HeaderWrapper>
  );
}
