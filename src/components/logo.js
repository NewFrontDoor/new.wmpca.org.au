import React from 'react';
import styled from '@emotion/styled';
import {Link} from 'react-router-dom';
import {ReactComponent as LogoImg} from '../assets/logo.svg';
import wmpcaLogo from '../assets/WMPCA_vertical_Lrg.jpg'

const MainTitle = styled.div`
  width: 150px;
  height: 150px;
  margin: auto;


  h1 {
    color: #ececec;
    padding-top: 45px;
    padding-left: 8px;
    font-size: 26px;
  }

  img {
    max-width: 100%;
  }

  @media (min-width: 640px) {
    margin-bottom: 22px;
    margin-left: 0px;
  }
`;

export default function Logo({img, sitename}) {
  return (
    <Link to="/">
      {/*<MainTitle>{img ? <LogoImg /> : <h1>{sitename}</h1>}</MainTitle>*/}
      <MainTitle>{img ? <img src={wmpcaLogo} alt=""/> : <h1>{sitename}</h1>}</MainTitle>
    </Link>
  );
}
