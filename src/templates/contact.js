import React from 'react';
import styled from '@emotion/styled';
import SectionTitle from '../components/section-title';
import ActionBlock from '../components/action-block';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  @media (min-width: 500px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 900px) {
    grid-template-columns: 2fr 1fr 2fr;
  }
`;

export default function Contact({map, contact}) {
  return (
    <>
      <SectionTitle text="Contact Us" />

      {map && (
        <div className="row">
          <div className="span10">
            <div id="google_map">
              <iframe width="1170" height="370" src="" title="Google Map" />
              <br />
            </div>
          </div>
        </div>
      )}

      <Grid>
        {contact.map(block => {
          return (
            <div>
              {block.map(item => (
                <ActionBlock
                  heading={item.heading}
                  content={item.content}
                  action={item.action}
                />
              ))}
            </div>
          );
        })}
      </Grid>
    </>
  );
}
