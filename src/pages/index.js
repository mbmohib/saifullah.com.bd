import * as React from 'react';
import {
  Layout,
  Button,
  Container,
  Stat,
  Blog,
  DynamicImage,
} from '../components';
import {
  RightArrow,
  Facebook,
  Email,
  Phone,
  Youtube,
  Book,
  Video,
} from '../icons';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { mediaQuery } from '../styles';
import heroImage from '../images/background/hero-image.jpg';
import heroImageMobile from '../images/background/hero-image-mobile.jpg';
import BackgroundImage from 'gatsby-background-image';
import { useBackgroundImage } from '../hooks';

const stats = [
  {
    label: 'Followers',
    stat: '1.5M+',
    icon: <Facebook width="30" height="63" mr={3} />,
  },
  {
    label: 'Subscribers',
    stat: '81K+',
    icon: <Youtube width="86" height="50" mr={3} />,
  },
  {
    label: 'Videos',
    stat: '700+',
    icon: <Video width="86" height="50" mr={3} />,
  },
  {
    label: 'Book',
    stat: 'One',
    icon: <Book width="86" height="50" mr={3} />,
  },
];

const videos = [
  {
    title: 'lorem ipsum dolar sit amet',
    url: '',
    image: 'video-01.jpg',
  },
  {
    title: 'lorem ipsum dolar sit amet',
    url: '',
    image: 'video-02.jpg',
  },
  {
    title: 'lorem ipsum dolar sit amet',
    url: '',
    image: 'video-03.jpg',
  },
  {
    title: 'lorem ipsum dolar sit amet',
    url: '',
    image: 'video-04.jpg',
  },
];

const blogs = [
  {
    title: 'lorem ipsum dolar sit amet',
    date: 'February 28, 2021',
    image: 'blog-01.jpg',
    url: '',
    category: 'Siam',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit donec dignissim interdum et elementum pellentesque egestas enim gravida. Sit lobortis arcu, vitae libero. Blandit accumsan sed eros',
  },
  {
    title: 'lorem ipsum dolar sit amet',
    date: 'February 28, 2021',
    image: 'blog-02.jpg',
    url: '',
    category: 'Siam',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit donec dignissim interdum et elementum pellentesque egestas enim gravida. Sit lobortis arcu, vitae libero. Blandit accumsan sed eros',
  },
  {
    title: 'lorem ipsum dolar sit amet',
    date: 'February 28, 2021',
    image: 'blog-03.jpg',
    url: '',
    category: 'Siam',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit donec dignissim interdum et elementum pellentesque egestas enim gravida. Sit lobortis arcu, vitae libero. Blandit accumsan sed eros',
  },
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
    'thumb'
    'content'
    'footer';

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
    'video-01.jpg',
    'video-02.jpg',
    'video-03.jpg',
    'video-04.jpg',
  ]);

  return (
    <Layout title="Abdul Hi Muhammad Saifullah">
      <BackgroundImage />
      <Hero>
        <Container>
          <HeroContent>
            <p className="text-xl text-white">Assalamu ‘Alaikum,</p>
            <p className="text-lg text-white">I’m</p>
            <p className="text-3xl font-semibold text-white">
              Abdul Hi Muhammad <br />
              Saifullah
            </p>
          </HeroContent>
        </Container>
      </Hero>

      <Container className="mt-8 md:mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <p className="text-xl font-semibold text-primary mb-3 md:mb-0">
            About me
          </p>
          <div className="col-span-2 pl-4 border-l-2 border-primary">
            <p className="text-lg font-semibold">
              Religious Consultant at E.B solutions Limited
            </p>
            <p className="text-lg mt-2 font-semibold">
              Khatib at Masjidul Jumawa Complex
            </p>
          </div>
        </div>

        <AboutContent>
          <div className="z-50" style={{ gridArea: 'thumb' }}>
            <DynamicImage src="profile-pic.png" alt="Profile Image" />
          </div>
          <div style={{ gridArea: 'content' }} className="mt-6 md:mt-1">
            <p>
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
          </div>
          <AboutFooter>
            <div style={{ gridArea: '1 / 2' }}>
              <div className="flex">
                <Button>
                  <Facebook mr={2} />
                  Follow me
                </Button>
                <Button className="ml-3 md:ml-5">
                  <Youtube className="mr-2" />
                  Subscribe
                </Button>
              </div>
              <Link to="" className="mt-4">
                <Email className="mt-3 mr-2" />
                <p className="text-lg font-semibold">ahsaifullah@gmail.com</p>
              </Link>
              <Link to="" mt={2}>
                <Phone className="mr-2 mt-1" />
                <p className="text-lg font-semibold">01712-959706</p>
              </Link>
            </div>
          </AboutFooter>
        </AboutContent>
      </Container>

      <div className="bg-primary-light py-8 lg:py-10 xs:py-15 mt-10">
        <div className="py-2 lg:py-4 xl:py-6">
          <div
            className="gap-5 justify-items-center"
            style={{
              gridTemplateColumns: `'1fr',
              'repeat(2, 1fr)',
              null,
              'repeat(4, 1fr)'`,
            }}
          >
            {stats.map((stat, i) => (
              <Stat stat={stat} key={i} />
            ))}
          </div>
        </div>
      </div>

      <Container className="mt-8 md:mt-10">
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
          <div className="order-last md:order-first">
            <p className="text-2xl mb-4 text-primary">Book Name</p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit donec
              dignissim interdum et elementum pellentesque egestas enim gravida.
              Sit lobortis arcu, vitae libero. Blandit accumsan, sed eros,
              volutpat. Diam, arcu quam tellus at massa eget. Faucibus praesent
              suscipit mattis augue. Non id lacus at nunc. Posuere Diam, arcu
              quam tellus at massa eget. Faucibus praesent suscipit mattis
              augue. Non id lacus at nunc. Posuere
            </p>

            <Link className="mt-2" to="">
              Read More <RightArrow className="ml-1" />
            </Link>
          </div>
          <div className="order-first md:order-last justify-self-end">
            <DynamicImage src="book.jpg" alt="Book Image" />
          </div>
        </div>
      </Container>

      <Container className="mt-8 md:mt-10">
        <div className="flex justify-between mb-5">
          <p className="text-2xl text-primary">Featured Videos</p>
          <Button color="secondary">View All</Button>
        </div>
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
          {videos.map((video, i) => (
            <a href={video.url} key={i}>
              <VideoItem fluid={videoImages[i].node.childImageSharp.fluid}>
                <p className="text-xl text-primary-light">{video.title}</p>
              </VideoItem>
            </a>
          ))}
        </div>
      </Container>

      <Container className="mt-8 md:mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <p className="text-2xl text-primary mb-3 md:mb-0">Blog posts</p>
          <div className="col-span-2 pl-4 border-l-2 border-primary">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
              nunc etiam amet nunc morbi potenti mauris. Neque scelerisque
              aliquet ac sodales mi suspendisse. Urna euismod pellentesque .
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:gap-4 grid-cols-1 md:grid-cols-3">
          {blogs.map((blog, i) => (
            <Blog key={i} blog={blog} />
          ))}
        </div>
      </Container>
    </Layout>
  );
}
