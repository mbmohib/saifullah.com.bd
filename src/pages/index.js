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
import { RightArrow, Facebook, Email, Phone, Youtube } from "../icons";
import styled from "styled-components";
import heroImage from "../images/hero-image.jpg";
import profileImage from "../images/profile-pic.png";

const Hero = styled.div`
  background: url(${heroImage});
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;

const HeroContent = styled.div`
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  justify-content: center;

  p:first-child {
    margin-top: 100px;
  }
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  column-gap: 4rem;
  margin-top: 40px;
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
  display: grid;
  grid-template-columns: 1fr 2fr;
  column-gap: 4rem;
  background: #effbfb;
  box-shadow: -8px -8px 16px #effbfb, 8px 8px 20px #b6dada;
  border-radius: 10px;
  padding: 16px 0;
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
              Abdul Hi Muhammad <br />
              Saifullah
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
              Religious Consultant at E.B solutions Limited & <br />
              Khatib at Masjidul Jumawa Complex
            </Text>
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

            <Link mt={2} to="">
              Read More <RightArrow ml={1} />
            </Link>
          </Box>
          <AboutFooter>
            <Box gridArea="1 / 2" alignSelf="center">
              <Flex>
                <Button>
                  <Facebook mr={2} />
                  Follow me
                </Button>
                <Button ml={3}>
                  <Youtube mr={2} />
                  Subscribe
                </Button>
              </Flex>
              <Link to="" mt={4}>
                <Email mr={2} mt={1} />
                <Text variant="heading4">ahsaifullah@gmail.com</Text>
              </Link>
              <Link to="" mt={2}>
                <Phone mr={2} mt={1} />
                <Text variant="heading4">01712-959706</Text>
              </Link>
            </Box>
          </AboutFooter>
        </AboutContent>
      </Container>
    </Layout>
  );
}
