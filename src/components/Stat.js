import React from "react";
import { Text, Box, Flex } from "./";
import styled from "styled-components";
import { mediaQuery } from "../styles";

const StatWrapper = styled.div`
  background: var(--secondary-color);
  box-shadow: -6px -6px 18px #ffffff, 8px 8px 16px rgb(182 218 218 / 30%);
  border-radius: 10px;
  display: flex;
  padding: 40px 24px;
  min-width: 300px;

  ${mediaQuery.md`
    min-width: 350px;
  `}

  ${mediaQuery.lg`
    padding: 32px 16px;
    min-width: 300px;
  `}

  ${mediaQuery.xl`
    padding: 40px 24px;
    min-width: 450px;
  `}
`;

export default function Stat({ stat = {} }) {
  return (
    <StatWrapper>
      <Flex width="100%" alignItems="center" justifyContent="center">
        {stat.icon}
        <Box>
          <Text variant="heading1" fontWeight="700" color="primary">
            {stat.stat}
          </Text>
          <Text variant="heading4">{stat.label}</Text>
        </Box>
      </Flex>
    </StatWrapper>
  );
}
