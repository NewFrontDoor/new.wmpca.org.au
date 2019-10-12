import React from 'react';
import styled from '@emotion/styled';
import {Link} from 'react-router-dom';
import {ReactComponent as LogoImg} from '../assets/logo.svg';

const MainTitle = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 75px;
  margin: auto;
  transition: all 0.2s ease-in-out;
  background-color: #565a5c;

  &:hover {
    background-color: #edb512;
    svg {
      filter: grayscale(1) invert(1);
    }
  }

  h1 {
    color: #ececec;
    padding-top: 45px;
    padding-left: 8px;
    font-size: 26px;
  }

  svg {
    margin-top: 40px;
    margin-left: 7px;
    max-width: 95%;
    transition: all 0.2s ease-in-out;
  }

  @media (min-width: 640px) {
    margin-bottom: 22px;
    margin-left: 0px;
  }
`;

export default function Logo({img, sitename}) {
  return (
    <Link to="/">
      <MainTitle>{img ? <LogoImg /> : <h1>{sitename}</h1>}</MainTitle>
    </Link>
  );
}
