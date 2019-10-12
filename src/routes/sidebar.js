import React from 'react';
import styled from '@emotion/styled';
import Logo from '../components/logo';
import Menu from '../components/menu';

const VertNav = styled.div`
  grid-area: initial;
  @media (min-width: 640px) {
    z-index: 2000;
    height: 80vh;
    display: block;
    grid-area: sidebar;
  }
  @media (min-width: 640px) and (min-height: 500px) {
    position: sticky;
    top: 28px;
  }
`;

export default function SideBar({menu}) {
  return (
    <VertNav>
      <Logo img />
      <Menu items={menu} />
    </VertNav>
  );
}
