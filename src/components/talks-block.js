import React from 'react';
import styled from '@emotion/styled';
import { LatestSermonContainerDrupal, RecentSeries, LatestSermon, FeaturedSeries, CurrentSeries, SermonSeriesList } from '@newfrontdoor/sermon'
import seriesSermonList from '@newfrontdoor/sermon/dist/series-sermon-list';



const Grid = styled.div`
  display: grid;
  gap: 20px;
`;

const Div = styled.div`
  min-height: 300px;
`;

export default function SermonContent() {
  return (
    <Grid>
      {/*<LatestSermonContainerDrupal />
    <RecentSeries/>
    <LatestSermon/>
    <FeaturedSeries/>
    <CurrentSeries/>
    <SermonSeriesList/>
    */}</Grid>
  );
}
