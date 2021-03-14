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
  Stat,
  Grid,
  Blog
} from "../components";
import {
  RightArrow,
  Facebook,
  Email,
  Phone,
  Youtube,
  Book,
  Video
} from "../icons";
import styled from "styled-components";
import { mediaQuery } from "../styles";
import heroImage from "../images/hero-image.jpg";
import heroImageMobile from "../images/hero-image-mobile.jpg";
import profileImage from "../images/profile-pic.png";
import bookImage from "../images/book.jpg";
import videoImage01 from "../images/video-01.jpg";
import videoImage02 from "../images/video-02.jpg";
import videoImage03 from "../images/video-03.jpg";
import videoImage04 from "../images/video-04.jpg";
import blogImage01 from "../images/blog-01.jpg";
import blogImage02 from "../images/blog-02.jpg";
import blogImage03 from "../images/blog-03.jpg";

const stats = [
  {
    label: "Followers",
    stat: "1.5M+",
    icon: <Facebook width="30" height="63" mr={3} />
  },
  {
    label: "Subscribers",
    stat: "1.5M+",
    icon: <Youtube width="86" height="50" mr={3} />
  },
  {
    label: "Videos",
    stat: "1.5M+",
    icon: <Video width="86" height="50" mr={3} />
  },
  {
    label: "Book",
    stat: "1.5M+",
    icon: <Book width="86" height="50" mr={3} />
  }
];

const videos = [
  {
    title: "lorem ipsum dolar sit amet",
    url: "",
    image: videoImage01
  },
  {
    title: "lorem ipsum dolar sit amet",
    url: "",
    image: videoImage02
  },
  {
    title: "lorem ipsum dolar sit amet",
    url: "",
    image: videoImage03
  },
  {
    title: "lorem ipsum dolar sit amet",
    url: "",
    image: videoImage04
  }
];

const blogs = [
  {
    title: "lorem ipsum dolar sit amet",
    date: "February 28, 2021",
    image: blogImage01,
    url: "",
    category: "Siam",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit donec dignissim interdum et elementum pellentesque egestas enim gravida. Sit lobortis arcu, vitae libero. Blandit accumsan sed eros"
  },
  {
    title: "lorem ipsum dolar sit amet",
    date: "February 28, 2021",
    image: blogImage02,
    url: "",
    category: "Siam",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit donec dignissim interdum et elementum pellentesque egestas enim gravida. Sit lobortis arcu, vitae libero. Blandit accumsan sed eros"
  },
  {
    title: "lorem ipsum dolar sit amet",
    date: "February 28, 2021",
    image: blogImage03,
    url: "",
    category: "Siam",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit donec dignissim interdum et elementum pellentesque egestas enim gravida. Sit lobortis arcu, vitae libero. Blandit accumsan sed eros"
  }
];

const Hero = styled.div`
  background: url(${heroImageMobile});
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  ${mediaQuery.sm`
    background: url(${heroImage});
  `}
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

const VideoItem = styled.a`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${({ image }) => image});
  background-size: cover;
  background-position: center center;
  padding: 6rem 0;
  text-align: center;
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
      <Container mt={10}>
        <Flex flexDirection={{ xs: "column", md: "row" }}>
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
                <Button ml={5}>
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

      <Box
        backgroundColor="var(--secondary-color)"
        py={{ md: "80px", lg: "100px", xl: "150px" }}
        mt={10}
      >
        <Container fluid>
          <Grid gridGap={4} gridTemplateColumns="repeat(4, 1fr)">
            {stats.map((stat, i) => (
              <Stat stat={stat} key={i} />
            ))}
          </Grid>
        </Container>
      </Box>
      <Container mt={10}>
        <Grid gridGap={4} gridTemplateColumns="1fr 1fr">
          <Box>
            <Text mb={4} variant="heading2" color="primary" underline>
              Book Name
            </Text>

            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit donec
              dignissim interdum et elementum pellentesque egestas enim gravida.
              Sit lobortis arcu, vitae libero. Blandit accumsan, sed eros,
              volutpat. Diam, arcu quam tellus at massa eget. Faucibus praesent
              suscipit mattis augue. Non id lacus at nunc. Posuere Diam, arcu
              quam tellus at massa eget. Faucibus praesent suscipit mattis
              augue. Non id lacus at nunc. Posuere
            </Text>

            <Link mt={2} to="">
              Read More <RightArrow ml={1} />
            </Link>
          </Box>
          <Image
            style={{ justifySelf: "flex-end" }}
            src={bookImage}
            alt="Book Image"
          />
        </Grid>
      </Container>

      <Container mt={10}>
        <Flex justifyContent="space-between" mb={5}>
          <Text variant="heading2" color="primary" underline>
            Featured Videos
          </Text>
          <Button color="secondary">View All</Button>
        </Flex>
        <Grid gridGap={4} gridTemplateColumns="repeat(2, 1fr)">
          {videos.map((video, i) => (
            <VideoItem image={video.image} href={video.url} key={i}>
              <Text variant="heading3" color="light">
                {video.title}
              </Text>
            </VideoItem>
          ))}
        </Grid>
      </Container>

      <Container mt={10}>
        <Grid gridTemplateColumns="1fr 3fr">
          <Text mr={3} color="primary" variant="heading2">
            Blog posts
          </Text>
          <Box ml={4} pl={4} borderLeft="4px solid var(--primary-color)">
            <Text variant="paragraph1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
              nunc etiam amet nunc morbi potenti mauris. Neque scelerisque
              aliquet ac sodales mi suspendisse. Urna euismod pellentesque .
            </Text>
          </Box>
        </Grid>

        <Grid mt={5} gridGap={4} gridTemplateColumns="repeat(3, 1fr)">
          {blogs.map((blog, i) => (
            <Blog key={i} blog={blog} />
          ))}
        </Grid>
      </Container>
    </Layout>
  );
}
