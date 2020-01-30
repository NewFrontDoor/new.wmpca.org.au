import React from 'react';
import styled from '@emotion/styled';
import Calendar, { drupalClient } from '@newfrontdoor/calendar';

const client = drupalClient("https://cornerstoneapi.newfrontdoor.org/api/views/all_events_api")



const Grid = styled.div`
  display: grid;
  gap: 20px;
`;

/*const Div = styled.div`
  min-height: 300px;
`;*/

export default () =>  {
  return (
    <Grid>
        <Calendar
        client={client}
        initialView={'month'}
        />
    </Grid>
  );
}
