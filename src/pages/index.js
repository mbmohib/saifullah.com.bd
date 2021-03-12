import * as React from "react";
import { Layout, Box, Button, Flex, Link, Image } from "../components";
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
`;

export default function IndexPage() {
  return (
    <Layout title="Home">
      <Hero>
        <div className="container mx-auto">
          <div className="flex flex-col justify-center">
            <p className="text-xl">Lorem ipsum</p>
            <p className="text-lg">I’m</p>
            <h1 className="text-3xl">Lorem ipsum dolor sit amet</h1>
          </div>
        </div>
      </Hero>
      <div className="container mx-auto py-6">
        <div className="flex">
          <h2 className="text-2xl">About me</h2>
          <Box ml={4} pl={4} borderLeft="4px solid var(--primary-color)">
            <h3 className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit
              <br />
              Lorem ipsum dolor sit amet
            </h3>
          </Box>
        </div>

        <AboutContent>
          <Box zIndex="99" gridArea="thumb">
            <Image src={profileImage} alt="Profile Image" />
          </Box>
          <Box gridArea="content">
            <p className="text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur dicta vel laudantium. Quas nam quis magnam? Distinctio
              optio, laboriosam dolores corporis id architecto ducimus beatae
              placeat. Consequatur veritatis fugit ipsum. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Aspernatur dicta vel
              laudantium. Quas nam quis magnam? Distinctio optio, laboriosam
              dolores corporis id architecto ducimus beatae placeat. Consequatur
              veritatis fugit ipsum.
            </p>

            <Link className="mt-1" to="">
              Read More <RightArrow className="ml-1" />
            </Link>
          </Box>
          <AboutFooter>
            <Box gridArea="1 / 2" alignSelf="center">
              <div className="flex">
                <Button>Click Me</Button>
                <Button className="ml-3">Click Me</Button>
              </div>
              <Link to="" className="mt-4">
                Lorem ipsum dolor
              </Link>
              <Link to="" className="mt-2">
                Lorem ipsum dolor
              </Link>
            </Box>
          </AboutFooter>
        </AboutContent>

        <Box height="100px" width="100%" backgroundColor="red"></Box>
      </div>
    </Layout>
  );
}
