import React from "react";
import styled from "styled-components";
import { Text, DynamicImage, Link, Box } from "../components";
import { RightArrow } from "../icons";

const BlogWrapper = styled.div`
  background: #ffffff;
  box-shadow: -4px -4px 8px rgba(255, 255, 255, 0.5),
    4px 4px 8px rgba(182, 218, 218, 0.5);
  border-radius: 8px;
`;

export default function Blog({ blog }) {
  return (
    <BlogWrapper>
      <DynamicImage
        style={{ justifySelf: "flex-end" }}
        src={blog.image}
        alt={blog.title}
      />
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
