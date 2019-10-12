import React from 'react';
import Header from '../../components/header';
import PortfolioItem from './portfolio-item';
import styled from '@emotion/styled';

const ContentWrap = styled.div`
  margin-bottom: 20px;
`;

export default function Portfolio({title}) {
  return (
    <>
      <div className="span10">
        <Header heading={title.text} breadcrumbs={breadcrumbs} />

        <div className="row">
          <ContentWrap className="span10">
            <div className="row">
              <div id="portfolio_main_content">
                {title.prefix}
                {title.suffix}
                <ActionLinks />
                {items.map(item => {
                  return <PortfolioItem item={item} />;
                })}
              </div>
            </div>
          </ContentWrap>
        </div>
      </div>
    </>
  );
}
