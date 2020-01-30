import React from 'react';
import Carousel from '@newfrontdoor/carousel';
import styled from '@emotion/styled';
import Contact from '../templates/contact';
import Panels from '../components/panels';
import Portfolio from '../components/portfolio';
import Header from '../components/header';
import Welcome from '../components/welcome';

const Slide = styled.img`
  width: 100%;
`;

const Grid = styled.div`
  display: grid;
  gap: 20px;
`;

export default function FrontPage({
  heading,
  panels,
  portfolio,
  contact,
  slides,
  welcome
}) {
  return (
    <Grid>
      <Header heading={heading} />
      {slides && (
        <Carousel style={{height: '400px'}}>
          {slides.map(slide => (
            <Slide key={slide.alt} src={slide.src} alt={slide.alt} />
          ))}
        </Carousel>
      )}

      {panels && <Panels />}

      {portfolio && <Portfolio portfolio={portfolio} />}
      {contact && <Contact map={contact.map} contact={contact.content} />}
      {welcome && <Welcome welcome={welcome} />}
    </Grid>
  );
}
