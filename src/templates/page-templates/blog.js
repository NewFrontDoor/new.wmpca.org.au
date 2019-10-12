import React from 'react';
import SidebarRight from '../../components/sidebar';
import ActionLinks from '../../components/action-links';
import Header from '../../components/header';
import MainContent from '../../components/main-content';

export default function Blog({title, sidebarRight, content}) {
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
            <ActionLinks />
            {content}
          </MainContent>
        </div>
        {sidebarRight && <SidebarRight />}
      </div>
    </div>
  );
}
