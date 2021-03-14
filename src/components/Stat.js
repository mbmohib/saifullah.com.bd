import React from "react";
import { Text, Box, Flex } from "./";
import styled from "styled-components";

const StatWrapper = styled.div`
  background: var(--secondary-color);
  box-shadow: -8px -8px 16px #ffffff, 8px 8px 16px #b6dada;
  border-radius: 10px;
  display: flex;
  padding: 24px;
`;

export default function Stat({ stat = {} }) {
  return (
    <StatWrapper>
      <Flex width="100%" alignItems="center" justifyContent="center">
        {stat.icon}
        <Box>
          <Text variant="heading1" color="primary">
            {stat.stat}
          </Text>
          <Text variant="heading4">{stat.label}</Text>
        </Box>
      </Flex>
    </StatWrapper>
  );
}
