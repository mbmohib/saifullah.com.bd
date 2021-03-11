import * as React from "react";
import { Layout, Text, Box, Button } from "../components";
import styled from "styled-components";
import heroImage from "../images/hero-image.jpg";

const Hero = styled.div`
  background: url(${heroImage});
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
`;

export default function IndexPage() {
  return (
    <Layout title="Home">
      <Hero></Hero>
    </Layout>
  );
}
