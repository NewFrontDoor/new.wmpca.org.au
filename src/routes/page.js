import React from 'react';
import styled from '@emotion/styled';
import Header from '../components/header';
import PropTypes from 'prop-types';

const Grid = styled.div`
  display: grid;
  gap: 20px;
`;

const Wrapper = styled.article`
  min-height: 550px;
`;

export default function Page({ heading, content, slug, pageData }) {
  return (
    <Grid>
      <Header heading={heading ? heading : [pageData.heading]} />
      <Wrapper>
        {content}
        {pageData ? pageData.content.map(item => <p dangerouslySetInnerHTML={{ __html: item }}></p>) : ''}
      </Wrapper>
    </Grid>
  );
}

Page.propTypes = {
  slug: PropTypes.string.isRequired,
  pageData: PropTypes.object
};