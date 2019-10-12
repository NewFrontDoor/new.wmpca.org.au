import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  margin-bottom: 20px;
  min-height: 400px;
`;

export default function MainContent({children}) {
  return <Wrapper>{children}</Wrapper>;
}
