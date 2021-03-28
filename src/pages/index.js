import * as React from "react";
import {
  Layout,
  Text,
  Box,
  Button,
  Container,
  Flex,
  Link,
  Stat,
  Grid,
  Blog,
  DynamicImage
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
import heroImage from "../images/background/hero-image.jpg";
import heroImageMobile from "../images/background/hero-image-mobile.jpg";
import BackgroundImage from "gatsby-background-image";
import { useBackgroundImage } from "../hooks";

const stats = [
  {
    label: "Followers",
    stat: "1.5M+",
    icon: <Facebook width="30" height="63" mr={3} />
  },
  {
    label: "Subscribers",
    stat: "81K+",
    icon: <Youtube width="86" height="50" mr={3} />
  },
  {
    label: "Videos",
    stat: "700+",
    icon: <Video width="86" height="50" mr={3} />
  },
  {
    label: "Book",
    stat: "One",
    icon: <Book width="86" height="50" mr={3} />
  }
];

const videos = [
  {
    title: "lorem ipsum dolar sit amet",
    url: "",
    image: "video-01.jpg"
  },
  {
    title: "lorem ipsum dolar sit amet",
    url: "",
    image: "video-02.jpg"
  },
  {
    title: "lorem ipsum dolar sit amet",
    url: "",
    image: "video-03.jpg"
  },
  {
    title: "lorem ipsum dolar sit amet",
    url: "",
    image: "video-04.jpg"
  }
];

const blogs = [
  {
    title: "lorem ipsum dolar sit amet",
    date: "February 28, 2021",
    image: "blog-01.jpg",
    url: "",
    category: "Siam",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit donec dignissim interdum et elementum pellentesque egestas enim gravida. Sit lobortis arcu, vitae libero. Blandit accumsan sed eros"
  },
  {
    title: "lorem ipsum dolar sit amet",
    date: "February 28, 2021",
    image: "blog-02.jpg",
    url: "",
    category: "Siam",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit donec dignissim interdum et elementum pellentesque egestas enim gravida. Sit lobortis arcu, vitae libero. Blandit accumsan sed eros"
  },
  {
    title: "lorem ipsum dolar sit amet",
    date: "February 28, 2021",
    image: "blog-03.jpg",
    url: "",
    category: "Siam",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit donec dignissim interdum et elementum pellentesque egestas enim gravida. Sit lobortis arcu, vitae libero. Blandit accumsan sed eros"
  }
];

const Hero = styled.div`
  height: 80vh;
  background: top center / cover no-repeat;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)),
    url(${heroImageMobile});

  ${mediaQuery.sm`
    background-image: url(${heroImage});
  `}
`;

const HeroContent = styled.div`
  height: calc(90vh - 100px);
  display: flex;
  flex-direction: column;
  justify-content: center;

  p:first-child {
    margin-top: 100px;
  }
`;

const AboutContent = styled.div`
  display: grid;
  column-gap: 4rem;
  margin-top: 40px;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-template-areas:
    "thumb"
    "content"
    "footer";

  ${mediaQuery.md`
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 2fr 2fr 2fr 1fr;
    grid-template-areas:
      "thumb content"
      "thumb content"
      "thumb content"
      "footer footer";
  `}
`;

const AboutFooter = styled.div`
  background: var(--secondary-color);
  background: #effbfb;
  border-radius: 10px;
  padding: 16px 0;
  box-shadow: -8px -8px 16px #effbfb, 8px 8px 20px #b6dada;
  display: flex;
  justify-content: center;
  margin-top: 40px;

  ${mediaQuery.md`
    margin-top: 0;
    grid-template-columns: 1fr 2fr;
    grid-column: 1 / 3;
    grid-row: 3 / 5;
    display: grid;
    column-gap: 4rem;
  `}
`;

const VideoItem = styled(BackgroundImage)`
  background-size: cover;
  background-position: center center;
  padding: 6rem 0;
  text-align: center;
`;

export default function IndexPage() {
  const videoImages = useBackgroundImage([
    "video-01.jpg",
    "video-02.jpg",
    "video-03.jpg",
    "video-04.jpg"
  ]);

  return (
    <Layout title="Abdul Hi Muhammad Saifullah">
      <BackgroundImage />
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
      <Container mt={[8, 10]}>
        <Grid gridTemplateColumns={["1fr", "1fr 3fr"]}>
          <Text color="primary" variant="heading2" mb={[3, 0]}>
            About me
          </Text>
          <Box pl={4} borderLeft="4px solid var(--primary-color)">
            <Text variant="heading3">
              Religious Consultant at E.B solutions Limited
            </Text>
            <Text variant="heading3" mt={2}>
              Khatib at Masjidul Jumawa Complex
            </Text>
          </Box>
        </Grid>

        <AboutContent>
          <Box zIndex="99" gridArea="thumb">
            <DynamicImage src="profile-pic.png" alt="Profile Image" />
          </Box>
          <Box gridArea="content" mt={[6, 1]}>
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
                <Button ml={[3, 5]}>
                  <Youtube mr={2} />
                  Subscribe
                </Button>
              </Flex>
              <Link to="" mt={4}>
                <Email mr={2} mt="6px" />
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
        py={{ _: "80px", lg: "100px", xl: "150px" }}
        mt={10}
      >
        <Box px={{ _: 2, xl: 6 }}>
          <Grid
            gridGap={{ _: 4, lg: 2, xl: 4 }}
            gridTemplateColumns={{
              _: "1fr",
              sm: "repeat(2, 1fr)",
              lg: "repeat(4, 1fr)"
            }}
            justifyItems="center"
          >
            {stats.map((stat, i) => (
              <Stat stat={stat} key={i} />
            ))}
          </Grid>
        </Box>
      </Box>

      <Container mt={10}>
        <Grid gridGap={4} gridTemplateColumns={["1fr", "1fr 1fr"]}>
          <Box order={[2, 1]}>
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
          <Box order={[1, 2]} justifySelf="flex-end">
            <DynamicImage src="book.jpg" alt="Book Image" />
          </Box>
        </Grid>
      </Container>

      <Container mt={10}>
        <Flex justifyContent="space-between" mb={5}>
          <Text variant="heading2" color="primary" underline>
            Featured Videos
          </Text>
          <Button color="secondary">View All</Button>
        </Flex>
        <Grid gridGap={4} gridTemplateColumns={["1fr", "repeat(2, 1fr)"]}>
          {videos.map((video, i) => (
            <a href={video.url} key={i}>
              <VideoItem fluid={videoImages[i].node.childImageSharp.fluid}>
                <Text variant="heading3" color="light">
                  {video.title}
                </Text>
              </VideoItem>
            </a>
          ))}
        </Grid>
      </Container>

      <Container mt={10}>
        <Grid gridTemplateColumns={["1fr", "1fr 3fr"]}>
          <Text color="primary" variant="heading2" mb={[3, 0]}>
            Blog posts
          </Text>
          <Box pl={4} borderLeft="4px solid var(--primary-color)">
            <Text variant="paragraph1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
              nunc etiam amet nunc morbi potenti mauris. Neque scelerisque
              aliquet ac sodales mi suspendisse. Urna euismod pellentesque .
            </Text>
          </Box>
        </Grid>

        <Grid
          mt={5}
          gridGap={[6, 4]}
          gridTemplateColumns={["1fr", "repeat(3, 1fr)"]}
        >
          {blogs.map((blog, i) => (
            <Blog key={i} blog={blog} />
          ))}
        </Grid>
      </Container>
    </Layout>
  );
}
