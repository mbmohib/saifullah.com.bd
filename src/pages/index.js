import * as React from "react";
import { Layout, Text, Box, Button, Container, Flex } from "../components";
import styled from "styled-components";
import heroImage from "../images/hero-image.jpg";

const Hero = styled.div`
  background: url(${heroImage});
  height: 80vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;

const HeroContent = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default function IndexPage() {
  return (
    <Layout title="Home">
      <Hero>
        <Container>
          <HeroContent>
            <Text color="light" variant="heading3">
              Assalamu ‘Alaikum,
            </Text>
            <Text color="light" variant="heading4">
              I’m
            </Text>
            <Text color="light" variant="heading1" as="h1">
              Abdul Hi Muhammad Saifullah
            </Text>
          </HeroContent>
        </Container>
      </Hero>
      <Box>
        <Container py={6}>
          <Flex>
            <Text mr={3} color="primary" variant="heading2">
              About me
            </Text>
            <Box ml={4} pl={4} borderLeft="4px solid var(--primary-color)">
              <Text variant="heading3">
                Religious Consultant at E.B solutions Limited &
              </Text>
              <Text variant="heading3">Khatib at Masjidul Jumawa Complex</Text>
            </Box>
          </Flex>
        </Container>
      </Box>
    </Layout>
  );
}
