import * as React from 'react';
import { Layout, Container, Stat, Blog, DynamicImage } from '../components';
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
      <div className="hero">
        <Container>
          <div className="hero__content">
            <p className="text-xl text-white">Assalamu ‘Alaikum,</p>
            <p className="text-lg text-white">I’m</p>
            <p className="text-3xl font-semibold text-white">
              Abdul Hi Muhammad <br />
              Saifullah
            </p>
          </div>
        </Container>
      </div>

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

        <div className="about__content">
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
          <div className="about__footer">
            <div style={{ gridArea: '1 / 2' }}>
              <div className="flex">
                <button className="btn">
                  <Facebook mr={2} />
                  Follow me
                </button>
                <button className="btn ml-3 md:ml-5">
                  <Youtube className="mr-2" />
                  Subscribe
                </button>
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
          </div>
        </div>
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
          <button className="btn-secondary">View All</button>
        </div>
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
          {videos.map((video, i) => (
            <a href={video.url} key={i}>
              <BackgroundImage
                className="video__item"
                fluid={videoImages[i].node.childImageSharp.fluid}
              >
                <p className="text-xl text-primary-light">{video.title}</p>
              </BackgroundImage>
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
