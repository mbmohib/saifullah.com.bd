import React from "react";
import styled from "styled-components";
import { Text, Container, Flex } from "../components";

const FooterWrapper = styled.footer`
  background: var(--tertiary-color);
  padding: 8px 0;
  margin-top: 100px;
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <Flex justifyContent="space-between">
          <Text color="primary" variant="subtitle">
            © {new Date().getFullYear()} saifullah.com.bd
          </Text>
          <Text color="primary" variant="subtitle">
            Designed and Developed by MonKef.com
          </Text>
        </Flex>
      </Container>
    </FooterWrapper>
  );
}
