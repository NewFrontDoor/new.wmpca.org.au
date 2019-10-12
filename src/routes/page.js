import React from 'react';
import styled from '@emotion/styled';
import Header from '../components/header';

const Grid = styled.div`
  display: grid;
  gap: 20px;
`;

const Content = styled.article`
  min-height: 550px;
`;

export default function Page({heading, content}) {
  return (
    <Grid>
      <Header heading={heading} />
      <Content>
        {content}
      </Content>
      </Grid>
  );
}
