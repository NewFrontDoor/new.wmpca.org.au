import React from 'react';
import styled from '@emotion/styled';

const Mask = styled.div`
  padding-top: 10%;
`;

const PortfolioTags = styled.div`
  text-align: center;
  color: #fff;
  margin: 15px 0px 10px 0px;
  font-style: italic;
`;

export default function PortfolioPreview({image, title, url, description}) {
  return (
    <div className="span5 portfolio-item portfolio-item-first">
      <div className="view_portfolio_image">
        <a href={url}>{image}</a>
      </div>
      <Mask>
        <h3>{title}</h3>
        <PortfolioTags>{description}</PortfolioTags>
        <a href={url} className="info">
          Learn More
        </a>
      </Mask>
    </div>
  );
}
