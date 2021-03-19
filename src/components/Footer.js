import React from 'react';
import styled from 'styled-components';
import { Container } from '../components';

const FooterWrapper = styled.footer`
  background: var(--tertiary-color);
  padding: 8px 0;
  margin-top: 100px;
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <div className="flex justify-between flex-col md:flex-row text-center md:text-left">
          <p className="text-sm text-primary">
            © {new Date().getFullYear()} saifullah.com.bd
          </p>
          <p className="text-sm text-primary">
            Designed and Developed by MonKef.com
          </p>
        </div>
      </Container>
    </FooterWrapper>
  );
}
