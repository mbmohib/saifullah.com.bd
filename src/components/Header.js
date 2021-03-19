import React from 'react';
import styled from 'styled-components';
import { Container, Nav } from '../components';
import { Logo } from '../icons';
import { mediaQuery } from '../styles';
import { Link } from 'gatsby';

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
        <div className="items-center justify-between h-8 md:h-10">
          <Link to="/">
            <LogoItem />
          </Link>
          <Nav />
        </div>
      </Container>
    </HeaderWrapper>
  );
}
