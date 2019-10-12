import React from 'react';
import styled from '@emotion/styled';
import office from '../assets/backgrounds/office.png';
import Breadcrumbs from './breadcrumbs';

const PageHeading = styled.div`
  padding: 10px 20px;
  background: #333;
  background-image: url(${office});

  @media (min-height: 500px) {
    margin: 20px 0px;
  }

  h2 {
    color: #fff;
    line-height: 1.3;
    text-align: center;
    font-size: 36px;
    font-weight: 400;
  }
`;

export default function Header({heading, breadcrumbs}) {
  return (
    <PageHeading>
      <h2>
        {heading.map(line => (
          <React.Fragment key={line}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </h2>
      {breadcrumbs && <Breadcrumbs breadcrumbs={breadcrumbs} />}
    </PageHeading>
  );
}
