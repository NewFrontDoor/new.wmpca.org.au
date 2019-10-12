import React from 'react';
import styled from '@emotion/styled';

const BreadcrumbWrapper = styled.div`
  margin: -2px 0px;
  font-size: 24px;
  color: #555;
  text-align: center;

  a {
    margin-right: 5px;
    margin-top: -3px;
    margin-bottom: -1px;
  }
`;

export default function Breadcrumbs(breadcrumbs) {
  return (
    <BreadcrumbWrapper>
      <h3>
        {breadcrumbs.map(crumb => {
          return <a href={crumb.link}>{crumb.title} ← </a>;
        })}
      </h3>
    </BreadcrumbWrapper>
  );
}
