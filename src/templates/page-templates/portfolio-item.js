import React from 'react';
import Breadcrumbs from '../../components/breadcrumbs';
import Tabs from '../../components/tabs';
import Help from '../../components/help';
import ActionLinks from '../../components/action-links';
import MainContent from '../../components/main-content';

export default function PortfolioItem({title, breadcrumbs, content}) {
  return (
    <div className="span10">
      <Header heading={heading} />

      <div className="row">
        <div id="main_content_wrap" className="span10">
          <MainContent>
            {title.prefix}
            {title.suffix}
            <Tabs />
            <Help />
            <ActionLinks />
            {content}
          </MainContent>
        </div>
      </div>
    </div>
  );
}
