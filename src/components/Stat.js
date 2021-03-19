import React from 'react';
import styled from 'styled-components';
import { mediaQuery } from '../styles';

const StatWrapper = styled.div`
  background: var(--secondary-color);
  box-shadow: -8px -8px 16px #ffffff, 8px 8px 16px #b6dada;
  border-radius: 10px;
  display: flex;
  padding: 40px 24px;
  min-width: 300px;

  ${mediaQuery.lg`
    min-width: 300px;
  `}

  ${mediaQuery.xl`
    min-width: 450px;
  `}
`;

export default function Stat({ stat = {} }) {
  return (
    <StatWrapper>
      <div className="flex items-center justify-center w-full">
        {stat.icon}
        <div>
          <p className="text-2xl font-bold text-primary">{stat.stat}</p>
          <p className="text-lg">{stat.label}</p>
        </div>
      </div>
    </StatWrapper>
  );
}
