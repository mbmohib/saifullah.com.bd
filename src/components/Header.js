import React from 'react';
import { Container, Nav } from '../components';
import { Logo } from '../icons';
import { Link } from 'gatsby';

export default function Header() {
  return (
    <div className="header">
      <Container>
        <div className="items-center justify-between h-8 md:h-10">
          <Link to="/">
            <Logo className="logo" />
          </Link>
          <Nav />
        </div>
      </Container>
    </div>
  );
}
