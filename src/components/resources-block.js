import React from 'react';
import styled from '@emotion/styled';
import {Link} from 'react-router-dom';

const Div = styled.div`
  min-height: 300px;
`;

const ResourceLinks = styled.ul`
 list-style: none;
`;


export default () =>  {
  return (
    <Div>
      <ResourceLinks>
        <li><Link to="/resources">Our Ministry Partners</Link></li>
        <li><Link to="/resources">Philosophy of Ministry</Link></li>
      </ResourceLinks>
    </Div>
  );
}
