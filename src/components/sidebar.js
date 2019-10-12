import React from 'react';
import styled from '@emotion/styled';

const SidebarWrap = styled.div `
  padding: 5px 0px 0px 18px;
`

export default function SidebarRight({first, second}) {
  return (
    <div className="span4">
      <div id="sidebar_wrap">
        {first && (
          <aside
            id="sidebar-first"
            role="complementary"
            className="sidebar clearfix"
          >
            {first}
          </aside>
        )}
        {second && (
          <aside
            id="sidebar-second"
            role="complementary"
            className="sidebar clearfix"
          >
            {second}
          </aside>
        )}
      </div>
    </div>
  );
}

SidebarRight.propTypes = {
  first: PropTypes.any,
  second: PropTypes.any
}
