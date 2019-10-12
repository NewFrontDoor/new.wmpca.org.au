import React from 'react';
import SidebarRight from '../components/sidebar';
import Tabs from '../components/tabs';
import Help from '../components/help';
import ActionLinks from '../components/action-links';
import MainContent from '../../components/main-content';

export default function Page({title, breadcrumbs, node, sidebarRight}) {
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
            <Tabs />
            <Help />
            <ActionLinks />
            {node}
          </MainContent>
        </div>

        <SidebarRight sidebarRight={sidebarRight} />
      </div>
    </div>
  );
}
