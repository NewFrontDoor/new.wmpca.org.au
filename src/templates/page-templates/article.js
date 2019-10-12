import React from 'react';
import Header from '../../components/header';
import SidebarRight from '../../components/sidebar';
import Tabs from '../../components/tabs';
import MainContent from '../../components/main-content';

export default function PortfolioItem({
  title,
  breadcrumbs,
  content,
  sidebarRight
}) {
  return (
    <div className="span10">
      <Header heading={title.text} breadcrumbs={breadcrumbs} />

      <div className="row">
        <div
          id="main_content_wrap"
          className={sidebarRight ? 'span6' : 'span10'}
        >
          <MainContent>
            {title.prefix}
            {title.suffix}
            <Tabs tabs={tabs} />
            {content}
          </MainContent>
        </div>

        <SidebarRight />
      </div>
    </div>
  );
}
