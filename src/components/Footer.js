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
        <Flex
          textAlign={["center", "left"]}
          justifyContent="space-between"
          flexDirection={["column", "row"]}
        >
          <Text color="primary" variant="subtitle">
            © {new Date().getFullYear()} saifullah.com.bd
          </Text>
          <Text color="primary" variant="subtitle">
            Designed by{" "}
            <a href="https://www.behance.net/nurshadrahman">Nurshad Rahman</a>,
            Developed by <a href="https://monkef.com">MonKef.com</a>
          </Text>
        </Flex>
      </Container>
    </FooterWrapper>
  );
}
