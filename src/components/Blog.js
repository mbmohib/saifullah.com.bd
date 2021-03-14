import React from "react";
import styled from "styled-components";
import { Text, Image, Link, Box } from "../components";
import { RightArrow } from "../icons";

const BlogWrapper = styled.div`
  background: #ffffff;
  box-shadow: -8px -8px 16px #ffffff, 8px 8px 16px #b6dada;
  border-radius: 8px;
`;

export default function Blog({ blog }) {
  return (
    <BlogWrapper>
      <Image src={blog.image} />
      <Box py={4} px={4}>
        <Text variant="paragraph1" mb={3} underline color="primary">
          {blog.category}
        </Text>
        <Text variant="heading4" mb={1}>
          {blog.title}
        </Text>
        <Text variant="subtitle" mb={2} color="primary">
          {blog.date}
        </Text>
        <Text>{blog.content}</Text>

        <Link mt={4} to={blog.url}>
          Read More <RightArrow ml={1} />
        </Link>
      </Box>
    </BlogWrapper>
  );
}
