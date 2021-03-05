import * as React from "react";
import { Layout, Text, Box, Button } from "../components";
import styled from "styled-components";

const Container = styled(Box)`
  height: 160px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* color: ${({ theme }) => theme.colors.text}; */
  border-radius: 4px;
  position: relative;
  padding: 32px;
  transition: all ease-in-out 0.2s;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
  /* background: ${({ theme }) =>
    theme.name === "dark" ? theme.colors.dark1 : theme.colors.light2}
    linear-gradient(
      -45deg,
      ${({ theme, language }) =>
    language && theme.colors[language]
      ? theme.colors[language]
      : theme.colors.primary3}
        16px,
      rgba(0, 0, 0, 0.01) 0
    ); */

  &:hover {
    transform: translateY(-4px);
  }
`;

export default function IndexPage() {
  return (
    <Layout>
      <Container>
        <Box mt={4}>
          <p>Hello from layout</p>
          <Text>Hello from Text</Text>
          <Button color="red">Click</Button>
        </Box>
      </Container>
    </Layout>
  );
}
