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
        <Flex
          height={{ xs: "60px", md: "100px" }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Link to="/">
            <Box display={{ _: "none", md: "block" }} p={{ xs: 3, md: 6 }}>
              <Logo width="47" height="71" />
            </Box>
            <Box display={{ xs: "block", md: "none" }}>
              <Logo width="27" height="51" />
            </Box>
          </Link>
          <Nav />
        </Flex>
      </Container>
    </HeaderWrapper>
  );
}
