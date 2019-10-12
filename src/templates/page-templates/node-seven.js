import React from 'react';
import Panels from '../../components/panels';
import Header from '../../components/header';
import Portfolio from '../../components/portfolio';
import Contact from '../contact';

export default function Seven({heading, panels, portfolio, contact}) {
  return (
    <div className="span10">
      <Header heading={heading} breadcrumbs={breadcrumbs} />

      <div className="row">
        <div className="span10">
          <Carousel />
        </div>
      </div>
      {panels && <Panels />}
      {portfolio && <Portfolio />}
      {contact && <Contact />}
    </div>
  );
}
