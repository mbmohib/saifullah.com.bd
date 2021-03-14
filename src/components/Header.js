import React from "react";
import styled from "styled-components";
import { Box, Link, Container, Nav, Flex } from "../components";
import { Logo } from "../icons";

const HeaderWrapper = styled.div`
  background: linear-gradient(360deg, #effbfb 0%, #ffffff 100%);
  position: absolute;
  width: 100%;
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <Container>
        <Flex height="100px" justifyContent="space-between" alignItems="center">
          <Link to="/">
            <Logo width="47" height="71" />
          </Link>
          <Nav />
        </Flex>
      </Container>
    </HeaderWrapper>
  );
}
