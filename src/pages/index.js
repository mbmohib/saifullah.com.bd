import * as React from "react";
import {
  Layout,
  Text,
  Box,
  Button,
  Container,
  Flex,
  Link,
  Image,
  Grid
} from "../components";
import { RightArrow } from "../icons";
import styled from "styled-components";
import heroImage from "../images/hero-image.jpg";
import profileImage from "../images/profile-pic.jpg";

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

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  column-gap: 4rem;
  margin-top: 32px;
  grid-template-rows: 2fr 2fr 2fr 1fr;
  grid-template-areas:
    "thumb content"
    "thumb content"
    "thumb content"
    "footer footer";
`;

const AboutFooter = styled.div`
  background: var(--secondary-color);
  grid-column: 1 / 3;
  grid-row: 3 / 5;
`;

export default function IndexPage() {
  return (
    <Layout title="Home">
      <Hero>
        <Container>
          <HeroContent>
            <Text color="light" variant="heading3">
              Lorem ipsum
            </Text>
            <Text color="light" variant="heading4">
              I’m
            </Text>
            <Text color="light" variant="heading1" as="h1">
              Lorem ipsum dolor sit amet
            </Text>
          </HeroContent>
        </Container>
      </Hero>
      <Container py={6}>
        <Flex>
          <Text mr={3} color="primary" variant="heading2">
            About me
          </Text>
          <Box ml={4} pl={4} borderLeft="4px solid var(--primary-color)">
            <Text variant="heading3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit
            </Text>
            <Text variant="heading3">Lorem ipsum dolor sit amet</Text>
          </Box>
        </Flex>

        <AboutContent>
          <Box zIndex="99" gridArea="thumb">
            <Image src={profileImage} alt="Profile Image" />
          </Box>
          <Box gridArea="content">
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur dicta vel laudantium. Quas nam quis magnam? Distinctio
              optio, laboriosam dolores corporis id architecto ducimus beatae
              placeat. Consequatur veritatis fugit ipsum. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Aspernatur dicta vel
              laudantium. Quas nam quis magnam? Distinctio optio, laboriosam
              dolores corporis id architecto ducimus beatae placeat. Consequatur
              veritatis fugit ipsum.
            </Text>

            <Link mt={1} to="">
              Read More <RightArrow ml={1} />
            </Link>
          </Box>
          <AboutFooter></AboutFooter>
        </AboutContent>

        <Box height="100px" width="100%" backgroundColor="red"></Box>
      </Container>
    </Layout>
  );
}
