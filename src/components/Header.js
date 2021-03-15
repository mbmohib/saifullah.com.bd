import React from "react";
import styled from "styled-components";
import { Link, Container, Nav, Flex } from "../components";
import { Logo } from "../icons";
import { mediaQuery } from "../styles";

const HeaderWrapper = styled.div`
  background: linear-gradient(360deg, #effbfb 0%, #ffffff 100%);
  position: absolute;
  width: 100%;
  opacity: 0.9;
`;

const LogoItem = styled(Logo)`
  width: 27px;
  height: 51px;

  ${mediaQuery.md`
    width: 47px;
    height: 71px;
  `}
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <Container>
        <Flex
          height={["60px", "100px"]}
          justifyContent="space-between"
          alignItems="center"
        >
          <Link to="/">
            <LogoItem />
          </Link>
          <Nav />
        </Flex>
      </Container>
    </HeaderWrapper>
  );
}
